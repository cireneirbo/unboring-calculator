function calculateInterestPerYear(periodContribution, periodsPerYear, interestRatePerYear, yearsToInvest) {

  /*const periodContribution = periodContribution;
  const periodsPerYear = periodsPerYear;
  const interestRatePerYear = interestRatePerYear;
  const yearsToInvest = yearsToInvest;*/

  let sum = 0;
  
  // add to sum for each year of investment
  for(let y = 0; y < yearsToInvest; y++){

    // add contributions for an entire year
    for(let i = 0; i < periodsPerYear; i++) {
      sum += periodContribution;
    }

    // multiply interest per year
    sum *= interestRatePerYear;
  }

  console.log(`If you invest $${periodContribution}, at an interval of ${periodsPerYear} times per year, for ${yearsToInvest} ${yearsToInvest > 1 ? "years" : "year"}, at a return rate of ${Math.round((interestRatePerYear * 100) - 100)}%, you will amass: $${Math.round(sum)}`);

  return Math.round(sum);
}

module.exports = {
  calculateInterestPerYear: calculateInterestPerYear,
}