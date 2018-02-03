import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Return 0 for no expenses', () => {
  const anEmptyArray = selectExpensesTotal([]);
  expect(anEmptyArray).toBe(0);
});

test('Add up single Expense', () => {
  const aSingleExpense = selectExpensesTotal([ expenses[1] ]);
  const itsAmountValue = expenses[1].amount
  expect(aSingleExpense).toBe(itsAmountValue);
});

test('Add up single Expense', () => {
  const allExpenses = selectExpensesTotal(expenses);
  const theirAddedAmounts = 600;
  expect(allExpenses).toBe(theirAddedAmounts);
  
});