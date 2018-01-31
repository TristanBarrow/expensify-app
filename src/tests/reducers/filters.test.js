import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { prependOnceListener } from 'cluster';

test('Setup reducer Initialization', () => {
  const output = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')    
  };

  expect(filtersReducer(undefined, { type: '@@INIT' })).toEqual(output);
});

test('Set sortby to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Set sortby to date', () => {
  const prevState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const state = filtersReducer(prevState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});


test('Set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', textFilter: 'Test Text'};
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe('Test Text');
});

test('Set start date', () => {
  const action = { type: 'SET_START_DATE', startDate: moment().startOf('month')};
  const state = filtersReducer(undefined, action);

  expect(state.startDate).toEqual(moment().startOf('month'));
});

test('Set end date', () => {
  const action = { type: 'SET_END_DATE', endDate: moment().endOf('month')};
  const state = filtersReducer(undefined, action);

  expect(state.endDate).toEqual(moment().endOf('month'));
});
