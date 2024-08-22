import React, { useState, useEffect } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('');

  const [totalTip, setTotalTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const people = parseInt(numPeople);

    if (isNaN(bill) || bill <= 0 || isNaN(tip) || tip < 0 || isNaN(people) || people <= 0) {
      setTotalTip(0);
      setTipPerPerson(0);
      return;
    }

    const calculatedTotalTip = (bill * tip) / 100;
    setTotalTip(calculatedTotalTip);

    const calculatedTipPerPerson = calculatedTotalTip / people;
    setTipPerPerson(calculatedTipPerPerson);
  }, [billAmount, tipPercent, numPeople]);

  return (
    <div className="tip-calculator">
      <h2>Tip Calculator</h2>

      <div className="input-group">
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <div className="input-group">
        <label htmlFor="tipPercent">Tip Percentage</label>
        <input
          type="number"
          id="tipPercent"
          value={tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
          placeholder="Enter tip percentage"
        />
      </div>

      <div className="input-group">
        <label htmlFor="numPeople">Number of People</label>
        <input
          type="number"
          id="numPeople"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
          placeholder="Enter number of people"
        />
      </div>

      <div className="results">
        <h3>Calculation Results</h3>
        <div className="result-item">
          <span>Total Tip:</span>
          <span>Rs. {totalTip.toFixed(2)}</span>
        </div>
        <div className="result-item">
          <span>Tip Per Person:</span>
          <span>Rs. {tipPerPerson.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;