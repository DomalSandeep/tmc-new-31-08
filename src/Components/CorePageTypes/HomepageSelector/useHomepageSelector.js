// useHomepageSelector.js
import { useCallback, useMemo, useState, useEffect } from 'react';
import { LABELS, BRIGHTNESS_KEYS, PALETTES, DEFAULT_PDF_FOLDER } from './constants';

// const MIN_ZOOM = 60;
// const MAX_ZOOM = 150;
// const ZOOM_STEP = 10;

/**
 * Encapsulates all selector state and derived values.
 *
 * @param {Object} options
 * @param {string} [options.pdfFolder] - base path/URL prefix where pre-generated PDFs live.
 * @param {(path: string) => Promise<boolean>} [options.checkPdfExists] - override how
 *   existence is checked (defaults to a HEAD fetch). Useful in a host project that wants
 *   to check an API or a bundled asset manifest instead of the network.
 */
export function useHomepageSelector({ pdfFolder = DEFAULT_PDF_FOLDER, checkPdfExists } = {}) {
  const [page, setPage] = useState('questions'); // 'questions' | 'result'
  const [answers, setAnswers] = useState({ size: 0, photo: 0, brightness: 0 });
  const [palette, setPalette] = useState(null); // { name, c1, c2 } | null
  const [zoom, setZoom] = useState(100);
  const [pdfStatus, setPdfStatus] = useState('idle'); // 'idle' | 'checking' | 'found' | 'missing'

  const setAnswer = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: Number(value) }));
  }, []);

  const brightnessKey = BRIGHTNESS_KEYS[answers.brightness];

  const paletteOptions = useMemo(() => PALETTES[brightnessKey], [brightnessKey]);

  const styleCode = useMemo(() => {
    if (!palette) return null;
    return [
      LABELS.size[answers.size],
      LABELS.photo[answers.photo],
      LABELS.brightness[answers.brightness],
      palette.name,
    ]
      .map((s) => s.toLowerCase())
      .join('-');
  }, [answers, palette]);

  const pdfPath = useMemo(() => {
    if (!styleCode) return null;
    return pdfFolder + styleCode + '.pdf';
  }, [styleCode, pdfFolder]);

  const goToResult = useCallback(() => {
    setPage('result');
    // Palette resets whenever the brightness tier changes (or on first entry),
    // so default to the first option in the current tier.
    setPalette(PALETTES[BRIGHTNESS_KEYS[answers.brightness]][0]);
  }, [answers.brightness]);

  const goToQuestions = useCallback(() => {
    setPage('questions');
  }, []);

  const selectPalette = useCallback((option) => {
    setPalette(option);
  }, []);

  // const zoomIn = useCallback(() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP)), []);
  // const zoomOut = useCallback(() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP)), []);

  const verifyPdf = useCallback(
    async (path) => {
      if (!path) return;
      setPdfStatus('checking');
      try {
        const exists = checkPdfExists ? await checkPdfExists(path) : await defaultCheckPdfExists(path);
        setPdfStatus(exists ? 'found' : 'missing');
      } catch (err) {
        console.warn('PDF verification error:', err);
        setPdfStatus('missing');
      }
    },
    [checkPdfExists]
  );

  // Auto-verify PDF when pdfPath changes
  useEffect(() => {
    if (pdfPath && page === 'result') {
      verifyPdf(pdfPath);
    }
  }, [pdfPath, page, verifyPdf]);

  return {
    page,
    answers,
    setAnswer,
    palette,
    paletteOptions,
    selectPalette,
    styleCode,
    pdfPath,
    pdfStatus,
    verifyPdf,
    zoom,
    // zoomIn,
    // zoomOut,
    goToResult,
    goToQuestions,
  };
}

async function defaultCheckPdfExists(path) {
  try {
    console.log('Checking PDF existence:', path);
    // Try GET request first (more reliable for static files)
    const getRes = await fetch(path, { method: 'GET' });
    console.log('PDF GET response:', getRes.status, getRes.statusText);
    if (getRes.ok) return true;
    
    // If GET fails, PDF doesn't exist
    return false;
  } catch (err) {
    console.error('PDF check error:', path, err);
    return false;
  }
}
