import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('color display', () => {
  it('renders a color display', () => {
    const wrapper = shallow(<ColorDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
