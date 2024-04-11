import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { BillInput } from './Components/TipCalculator/BillInput';
import { TipSelector } from './Components/TipCalculator/TipSelector';
import { PeopleInput } from './Components/TipCalculator/PeopleInput';
import { ResultsDisplay } from './Components/ResultCalculator/ResultsDisplay';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');

  useEffect(() => {
    const calculatedBill = parseFloat(bill) || 0;
    const calculatedPeople = parseFloat(people) || 1;
    const calculatedTipPercentage = parseFloat(tipPercentage) || 0;

    if (calculatedBill > 0 && calculatedPeople > 0 && calculatedTipPercentage >= 0) {
      const tipValue = ((calculatedBill * (calculatedTipPercentage / 100)) / calculatedPeople).toFixed(2);
      const totalValue = ((calculatedBill / calculatedPeople) + parseFloat(tipValue)).toFixed(2);

      setTipAmount(tipValue);
      setTotal(totalValue);
    } else {
      setTipAmount('0.00');
      setTotal('0.00');
    }
  }, [bill, tipPercentage, people]);

  const handleReset = () => {
    setBill('');
    setTipPercentage(0);
    setPeople(1);
    setTipAmount('0.00');
    setTotal('0.00');
  };

  return (
    <>
      <Header />
      <div className="general-wrapper">
        <div className='data-wrapper'>
          <BillInput setBill={setBill} bill={bill} />
          <TipSelector setTipPercentage={setTipPercentage} />
          <PeopleInput setPeople={setPeople} people={people} />
        </div>
        <div className='result-wrapper'>
          <ResultsDisplay tipAmount={tipAmount} total={total} handleReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default App;
