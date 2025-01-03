
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';
import { useState } from 'react';

const Calculator = () => {
    
    const [userInput, setUserInput] = useState(null);

  const calculateHandler = (enteredData) => {
    setUserInput(enteredData);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  const resetHandler = () => {
    setUserInput(null);
  };


  return (
    <div className='bg-[#172554] w-full mt-20'>
      <header className="header">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className='flex text-white justify-center text-4xl'>Investment Calculator</h1>
      </header>
      <Form onCalculate={calculateHandler} onReset={resetHandler} />
      {!userInput && <p style={{ textAlign: "center" }}>No Data available.</p>}
      {userInput && (
        <Table data={yearlyData} initialInvestment={userInput.currentSavings} />
      )}
    </div>
  )
}

export default Calculator
