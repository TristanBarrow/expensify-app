import React from 'react';
import { LoginPage } from '../../componets/LoginPage';
import { shallow } from 'enzyme';

test('Login page snapshot', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});