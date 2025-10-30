import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import { formatter } from "./util/investment";


function App() {

  const [result , setResult] = useState([])
  const [initialInvestment , setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);

  function handleCalculate(userInputData) {
    const initialInvestment = userInputData.initialInvestment;
    const annualInvestment = userInputData.annualInvestment;
    const expectedReturn = userInputData.expectedReturn;
    const duration = userInputData.duration;

    var payload = {
      initialInvestment : Number(initialInvestment),
      annualInvestment : Number(annualInvestment),
      expectedReturn : Number(expectedReturn),
      duration : Number(duration)
    };

    setInitialInvestment(payload.initialInvestment);
    setAnnualInvestment(payload.annualInvestment);

    const calculateResults = calculateInvestmentResults(payload);
    setResult(calculateResults);
  }

  return (
    <>
      <Header />
      <UserInput onCalculate={handleCalculate} />
      <Result results={result} 
        initialInvestment = {initialInvestment}
        annualInvestment = {annualInvestment}
        formatter={formatter}
      />
    </>
  );
}

export default App;
