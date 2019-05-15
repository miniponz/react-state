import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('color picker', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });

  
});
