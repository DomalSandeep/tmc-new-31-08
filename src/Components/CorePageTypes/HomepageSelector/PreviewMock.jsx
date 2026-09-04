// PreviewMock.jsx
import React, { useState, useEffect, useRef } from 'react';

const MIN_LOADER_DURATION = 800; // ms

export default function PreviewMock({ styleCode, palette, zoom }) {
  const previewImagePath = styleCode ? `/assets/themeimages/${styleCode}.jpg` : null;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [hasError, setHasError] = useState(false);

  const timerRef = useRef(null);

  const isLoading = !!previewImagePath && !(imageLoaded && minTimeElapsed);

  // Reset loading state whenever the image path changes
  useEffect(() => {
    if (!previewImagePath) return;

    setImageLoaded(false);
    setMinTimeElapsed(false);
    setHasError(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_LOADER_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [previewImagePath]);

  const imageStyle = {
    transform: `scale(${zoom / 100})`,
    transformOrigin: 'top left',
    '--c1': palette?.c1,
    '--c2': palette?.c2,
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.2s ease-in-out',
  };

  return (
    <div className="ncc-preview-wrap" style={{ position: 'relative' }}>
      {previewImagePath ? (
        <>
          <img
            src={previewImagePath}
            alt={`Preview for ${styleCode}`}
            className="ncc-preview-image"
            style={imageStyle}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageLoaded(true);
              setHasError(true);
            }}
          />

          {isLoading && (
            <div className="ncc-preview-loading-overlay">
              <div className="loader-wrap">
                <span className="ncc-spinner" />
                <p>Loading preview...</p>
              </div>
            </div>
          )}

          {hasError && !isLoading && (
            <div className="ncc-preview-placeholder">Failed to load preview</div>
          )}
        </>
      ) : (
        <div className="ncc-preview-placeholder">No preview available</div>
      )}

      <style>{`
        .ncc-preview-loading-overlay {
          position: absolute;
          top: 180px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(1px);
          z-index: 2;
        }

        .loader-wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ncc-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--ncc-accent);
          border-top-color: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          animation: ncc-spin 0.8s linear infinite;
        }

        @keyframes ncc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}