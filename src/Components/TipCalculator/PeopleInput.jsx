import React from "react";
import "./TipCalculator.css";

export const PeopleInput = ({ setPeople, people }) => {

  const handlePeopleChange = (value) => {
    if (value >= 1) {
      setPeople(value); // Permitir establecer el valor solo si es 1 o más
    } else {
      setPeople(''); // Permitir que el input se vacíe
    }
  }

  const validatePeopleInput = (value) => {
    const errorMessage = document.getElementById('error-message');
    if (value <= 0 && value !== '') {
      errorMessage.style.display = 'block'; // Mostrar error solo si el valor es menor o igual a cero y no está vacío
    } else {
      errorMessage.style.display = 'none';
    }
  }

  return (
    <>
      <div className="people-input-container">
        <h2>Number of People</h2>
        <div id="error-message" className="error-message">
          Can't be zero
        </div>
      </div>

      <label htmlFor="input-people">
        <input
          id="input-people"
          className="input-people"
          type="number"
          value={people}
          min="1"
          onChange={(e) => {
            validatePeopleInput(parseFloat(e.target.value))
            handlePeopleChange(parseFloat(e.target.value))
          }}
        />
      </label>
    </>
  );
};
