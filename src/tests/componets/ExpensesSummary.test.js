import React from 'react';
import { ExpenseSummary } from '../../componets/ExpensesSummary';
import { shallow } from 'enzyme';

test('Snapshot with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={1234} expenseCount={1} />);
  expect(wrapper).toMatchSnapshot(); 
});

test('Snapshot with multiple expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={5678} expenseCount={3} />);
  expect(wrapper).toMatchSnapshot(); 
});