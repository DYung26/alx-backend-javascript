import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  return fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
