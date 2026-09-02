// PreviewMock.jsx
import React from 'react';

export default function PreviewMock({ styleCode, palette, zoom }) {
  const previewImagePath = styleCode ? `/assets/themeimages/${styleCode}.jpg` : null;

  const imageStyle = {
    transform: `scale(${zoom / 100})`,
    transformOrigin: 'top left',
    '--c1': palette?.c1,
    '--c2': palette?.c2,
  };

  return (
    <div className="ncc-preview-wrap">
      {previewImagePath ? (
        <img
          src={previewImagePath}
          alt={`Preview for ${styleCode}`}
          className="ncc-preview-image"
          style={imageStyle}
        />
      ) : (
        <div className="ncc-preview-placeholder">No preview available</div>
      )}
    </div>
  );
}
