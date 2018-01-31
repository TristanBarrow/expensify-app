import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should filter by Text Value', () => {
  const filter = {
    text: 'c',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const filteredItems = [ expenses[2], expenses[1] ]; 
  expect(getVisibleExpenses(expenses, filter)).toEqual(filteredItems); 
});

test('Should filter by Start Date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const filteredItems = [ expenses[2], expenses[1] ]; 
  expect(getVisibleExpenses(expenses, filter)).toEqual(filteredItems); 
});

test('Should filter by End Date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const filteredItems = [ expenses[1], expenses[0] ]; 
  expect(getVisibleExpenses(expenses, filter)).toEqual(filteredItems); 
}); 

test('Should sort by Date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const filteredItems = [ expenses[2], expenses[1], expenses[0],  ]; 
  expect(getVisibleExpenses(expenses, filter)).toEqual(filteredItems); 
});

test('Should sort by Amount', () => {
  const filter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const filteredItems = [ expenses[1], expenses[2], expenses[0],  ]; 
  expect(getVisibleExpenses(expenses, filter)).toEqual(filteredItems);
});