import React from 'react';
import { LoginPage } from '../../componets/LoginPage';
import { shallow } from 'enzyme';

test('Login page snapshot', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('Call start login on click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});