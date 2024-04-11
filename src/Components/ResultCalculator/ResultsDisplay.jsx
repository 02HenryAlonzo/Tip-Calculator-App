import React from "react";
import "./ResultsDisplay.css";

export const ResultsDisplay = ({ tipAmount, total, handleReset }) => {
  return (
    <>
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="tip-amount">{tipAmount}</span>
          </h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="total">{total}</span>
          </h3>
        </div>
      </div>
      <button 
        type="button" 
        id="reset-button" 
        className="reset-button" 
        disabled={tipAmount <= 0 && total <= 0}
        onClick={handleReset}
      >
        RESET
      </button>
    </>
  );
};
