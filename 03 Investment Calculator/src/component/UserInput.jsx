import { useState } from "react";

export default function UserInput({ onCalculate }) {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function handleInitialInvestment(event) {
    setInitialInvestment(event.target.value);
    onCalculate({
      initialInvestment: event.target.value,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(event.target.value);
    onCalculate({
      initialInvestment,
      annualInvestment: event.target.value,
      expectedReturn,
      duration,
    });
  }

  function handleExpectedReturn(event) {
    setExpectedReturn(event.target.value);
    onCalculate({
      initialInvestment,
      annualInvestment,
      expectedReturn: event.target.value,
      duration,
    });
  }

  function handleDuration(event) {
    setDuration(event.target.value);
    onCalculate({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration: event.target.value,
    });
  }

  return (
    <div id="user-input">
      <div className="input-row">
        <div className="input-group">
          <label>INITIAL INVESTMENT</label>
          <input value={initialInvestment} onChange={handleInitialInvestment} />
        </div>

        <div className="input-group">
          <label>ANNUAL INVESTMENT</label>
          <input value={annualInvestment} onChange={handleAnnualInvestment} />
        </div>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label>EXPECTED RETURN</label>
          <input value={expectedReturn} onChange={handleExpectedReturn} />
        </div>

        <div className="input-group">
          <label>DURATION</label>
          <input value={duration} onChange={handleDuration} />
        </div>
      </div>
    </div>
  );
}
