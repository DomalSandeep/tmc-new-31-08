// PdfPreview.jsx
import React, { useEffect, useState } from 'react';

export default function PdfPreview({ pdfPath, status, onVerify }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (pdfPath && status !== 'checking') {
      console.log('PdfPreview: Verifying PDF path:', pdfPath);
      onVerify(pdfPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfPath]);

  // Force re-render of embed when PDF is found
  useEffect(() => {
    if (status === 'found') {
      setKey(prev => prev + 1);
    }
  }, [status, pdfPath]);

  return (
    <>
      <div className="ncc-pdf-preview-head">
        <span>PDF Preview</span>
        <span className="ncc-pdf-path">{pdfPath || '—'}</span>
      </div>

      <div className="ncc-pdf-preview-wrap">
        {status === 'checking' && <div className="ncc-pdf-checking">Checking for a matching PDF…</div>}
        {status === 'idle' && !pdfPath && <div className="ncc-pdf-checking">Select a homepage to preview</div>}
        {status === 'found' && pdfPath && (
          <embed 
            key={key}
            className="ncc-pdf-object" 
            src={pdfPath + '#toolbar=0'}
            type="application/pdf"
            title="Homepage PDF preview"
            aria-label="Homepage PDF preview"
          />
        )}
      </div>

      {status === 'missing' && pdfPath && (
        <div className="ncc-fallback show">
          We couldn't find a matching homepage preview. Please contact support and reference the style code above.
        </div>
      )}
    </>
  );
}
