import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoard from '../../componets/DashBoard';

test('render dash board', () => {
  const wrapper = shallow(<ExpenseDashBoard />);
  expect(wrapper).toMatchSnapshot();
});