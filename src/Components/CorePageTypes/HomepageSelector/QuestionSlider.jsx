// QuestionSlider.jsx
import React from 'react';

/**
 * One "question" block: title, subtitle, a 3-step slider, tick labels, and
 * a helper card that reflects the current value.
 */
export default function QuestionSlider({ index, questionKey, meta, labels, help, value, onChange }) {
  const fillPct = (value / (labels.length - 1)) * 100;

  return (
    <div className="ncc-q-block">
      <div className="ncc-q-title">
        <span className="ncc-num">{index}.</span> {meta.title}
      </div>
      <div className="ncc-q-sub">{meta.subtitle}</div>

      <div className="ncc-slider-row">
        <div className="ncc-slider-track" />
        <div className="ncc-slider-fill" style={{ width: `${fillPct}%` }} />
        <input
          type="range"
          min={0}
          max={labels.length - 1}
          step={1}
          value={value}
          aria-label={meta.ariaLabel}
          onChange={(e) => onChange(questionKey, e.target.value)}
        />
        <div className="ncc-slider-ticks">
          <span className="tick" style={{left: '0.5%'}}></span>
          <span className="tick" style={{ left: '50%' }}/>
          <span className="tick" style={{ left: '99.5%' }} />
        </div>
      </div>

      <div className="ncc-tick-labels">
        {labels.map((label, i) => (
          <span key={label} className={i === value ? 'on' : undefined}>
            {label}
          </span>
        ))}
      </div>

      <div className="ncc-helper">
        <b>{labels[value]}  :  </b>
        {help[value]}
      </div>
    </div>
  );
}
