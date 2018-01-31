import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../componets/ExpenseListFilters';
import { filter , altFilter} from '../fixtures/filters';


let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      filters={filter}
    />
  );
});

test('render expense list filters with default filters', () => {
  expect(wrapper).toMatchSnapshot();
}); 

test('render expense list filters with altFilters', () => {
  wrapper.setProps({
    filters: altFilter
  });
  expect(wrapper).toMatchSnapshot();
});

test('handle text change', () => {
  const value = 'rent';
  const e = { target: { value } };
  wrapper.find('input').prop('onChange')(e);
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sort by date', () => {
  const value = 'date';
  const e = { target: { value } };
  wrapper.find('select').simulate('change', e);
  expect(sortByDate).toHaveBeenCalled();
});

test('sort by amount', () => {
  const value = 'amount';
  const e = { target: { value } };
  wrapper.find('select').simulate('change', e);
  expect(sortByAmount).toHaveBeenCalled();
});

test('handle date change', () => {
  const dates = { 
    startDate: 100, 
    endDate: 200
  }
  wrapper.find('DateRangePicker').simulate('datesChange', dates);
  expect(setStartDate).toHaveBeenCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenCalledWith(dates.endDate);
});

test('handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').simulate('focusChange', calendarFocused);
  expect(wrapper.state().calendarFocused).toEqual(calendarFocused);
});