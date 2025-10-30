export default function Result({
  results,
  initialInvestment,
  annualInvestment,
  formatter,
}) {
  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(data => {
          const year = data.year;
          const investmentValue = Number(data.valueEndOfYear) || 0;
          const interestThisYear = Number(data.interest) || 0;
          const investedCapital = Number(initialInvestment) + Number(annualInvestment) * year;
          const totalInterest = investmentValue - investedCapital;
          const fmt = formatter ? v => formatter.format(Math.round(v)) : v => Math.round(v);

          return (
            <tr>
              <td>{year}</td>
              <td>{fmt(investmentValue)}</td>
              <td>{fmt(interestThisYear)}</td>
              <td>{fmt(totalInterest)}</td>
              <td>{fmt(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
