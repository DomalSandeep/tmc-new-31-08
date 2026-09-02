// PaletteGrid.jsx
import React from 'react';

export default function PaletteGrid({ options, selected, onSelect }) {
  return (
    <div className="ncc-palette-grid">
      {options.map((option) => {
        const isSelected = selected?.name === option.name;
        return (
          <div
            key={option.name}
            className={`ncc-palette-card${isSelected ? ' selected' : ''}`}
            role="radio"
            aria-checked={isSelected}
            tabIndex={0}
            onClick={() => onSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(option);
              }
            }}
          >
            <div className="ncc-p-head">
              <div className="ncc-radio">
                <div className="ncc-dot" />
              </div>
              <div className="ncc-p-name">{option.name}</div>
            </div>
            <div className="ncc-flex-wrap ">
              <div
              className="ncc-swatch"
              style={{ background: `${option.c1}` }}
            />

             <div
              className="ncc-swatch"
              style={{ background: `${option.c2}` }}  
            />
            </div>
          </div>
        );
      })}
    </div>
  );
}
