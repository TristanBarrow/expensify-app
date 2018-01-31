 import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../componets/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('render expense list item', () => {
  const wrapper = shallow(<ExpenseListItem { ...expenses[1] }/>);
  expect(wrapper).toMatchSnapshot();
});