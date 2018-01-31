import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Expenses reducer initialization', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]); 
});

test('Remove an expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('Fail to remove non-existant expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'fail'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('Add an expense', () => {
  const testExpense = {
    id: 111,
    description: 'Test Description',
    note: 'Test Note',
    amount: 150,
    createdAt: 99
  }

  const action = { 
    type: 'ADD_EXPENSE',
    expense: testExpense
  }

  const state = expensesReducer(expenses, action);
  
  const updatedExpenses = [
    ...expenses,
    testExpense
  ];
  expect(state).toEqual(updatedExpenses);
});

test('Edit an expense', () => {
  const update = {
    description: 'Edited Description',
    note: 'Edited Note',
    amount: 888,
    createdAt: 101
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { ...update }
  }; 

  const state = expensesReducer(expenses, action);
  const updatedExpenses = [ expenses[0], { ...expenses[1], ...update },  expenses[2]];
  expect(state).toEqual(updatedExpenses);
});

test('Edit an expense', () => {
  const update = {
    description: 'Failed Edited Description',
    note: 'Failed Edited Note',
    amount: 222,
    createdAt: 202
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: 'fail',
    updates: { ...update }
  };
  
  expect(expensesReducer(expenses, action)).toEqual(expenses);
});