import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../componets/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      history={history}
      expense={{ id: '101' }}
    />
  );
});

test('render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handle edit expense onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith('101', expenses[1]);
});

test('handle remove expense onSubmit', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith('101');
});