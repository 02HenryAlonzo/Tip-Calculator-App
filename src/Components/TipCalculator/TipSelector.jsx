import React, { useState } from "react";
import "./TipCalculator.css";

export const TipSelector = ({ setTipPercentage }) => {
  const [activeTip, setActiveTip] = useState(null);

  const tips = [5, 10, 15, 25, 50];

  const handleTipChange = (value, type) => {
    setTipPercentage(parseFloat(value) || 0);
    setActiveTip(type === 'custom' ? 'custom' : value.toString());
  };

  const handleFocus = () => {
    setActiveTip('custom');
  };

  return (
    <div>
      <h2>Select Tip %</h2>
      <ul>
        {tips.map((tip) => (
          <li key={tip}>
            <button
              type="button"
              className={`percentage-button ${activeTip === tip.toString() ? 'active' : ''}`}
              value={tip}
              onClick={() => handleTipChange(tip, 'button')}
            >
              {tip}%
            </button>
          </li>
        ))}
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className={`percentage-button ${activeTip === 'custom'}`}
            onFocus={handleFocus}
            onChange={e => handleTipChange(e.target.value, 'custom')}
          />
        </li>
      </ul>
    </div>
  );
};
