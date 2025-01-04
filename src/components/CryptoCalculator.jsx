import React, { useState } from 'react';

function CryptoCalculator() {
  const [investment, setInvestment] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(50);
  const [years, setYears] = useState(0);
  const [result, setResult] = useState(null);

  const calculateProfit = () => {
    const futureValue = investment * Math.pow(1 + annualReturn / 100, years);
    const profit = futureValue - investment;
    setResult({ futureValue, profit });
  };

  return (
    <div className='flex justify-center  mt-28'>
        <div className='flex flex-col justify-center'>
        <div className='lg:w-96 flex flex-col gap-4 '>
      <h2 className='text-3xl flex justify-center font-medium'>Investment Calculator</h2>
      <input 
      className='border-2 border-black' 
        type="number"
        placeholder="Investment Amount($)"
        onChange={(e) => setInvestment(Number(e.target.value))}
      />
      <input className='hidden'
        type="number"
        placeholder="Annual Return (%)"
        onChange={(e) => setAnnualReturn(Number(e.target.value))}
      />
      <input
        type="number"
        className='border-2 border-black' 
        placeholder="Time Period (years)"
        onChange={(e) => setYears(Number(e.target.value))}
      />
      <button className='mb-5 border-2 border-black bg-white' onClick={calculateProfit}>Calculate</button>
      </div>
      {result && (
        <div className=' text-2xl'>
          <p>Future Value: {result.futureValue.toFixed(2)}</p>
          <p>Profit: {result.profit.toFixed(2)}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default CryptoCalculator;
