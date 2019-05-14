import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('color picker', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
