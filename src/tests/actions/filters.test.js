import { 
  setStartDate,   // 2 tests 
  setEndDate,     // 2 tests
  setTextFilter,  // 2 tests
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('Should set start date Default action object', () => {
  // no paramiters
  const output = {
    type: 'SET_START_DATE',
    startDate: undefined
  };
  expect(setStartDate()).toEqual(output);
});

test('Should set end date Default action object', () => {
  // no paramiters
  const output = {
    type: 'SET_END_DATE',
    endDate: undefined
  };
  expect(setEndDate()).toEqual(output);
  
});

test('Should set text filter Default action object', () => {
  // no paramiters
  const output = {
    type: 'SET_TEXT_FILTER',
    textFilter: ''
  };
  expect(setTextFilter()).toEqual(output);
});

test('Should set start date Non-Default action object', () => {
  const input = 100; // represents a date
  const output = {
    type: 'SET_START_DATE',
    startDate: 100
  };
  expect(setStartDate(input)).toEqual(output);
});

test('Should set end date Non-Default action object', () => {
  const input = 101; // represents a date
  const output = {
    type: 'SET_END_DATE',
    endDate: 101
  };
  expect(setEndDate(input)).toEqual(output);
});

test('Should set text filter Non-Default action object', () => {
  const input = 'Test value for text filter action object'
  const output = {
    type: 'SET_TEXT_FILTER',
    textFilter: 'Test value for text filter action object'
  };
  expect(setTextFilter(input)).toEqual(output);
});

test('Should sort by date action object', () => {
  // no paramiters
  const output = {
    type: 'SORT_BY_DATE'
  };
  expect(sortByDate()).toEqual(output);
});

test('Should sort by amount action object', () => {
  // no paramiters
  const output = {
    type: 'SORT_BY_AMOUNT'    
  };
  expect(sortByAmount()).toEqual(output);
});
