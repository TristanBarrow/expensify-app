import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../componets/LoadingPage';

test('Loading page snapshot', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});