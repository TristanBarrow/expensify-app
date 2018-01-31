import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../componets/NotFound';

test('render 404 not found page', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});