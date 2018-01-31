import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../componets/ExpenseList';
import expenses from '../fixtures/expenses';

test('Render expense list with test values', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />); 
  expect(wrapper).toMatchSnapshot();
});

test('Render empty expense list', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />); 
  expect(wrapper).toMatchSnapshot();
});