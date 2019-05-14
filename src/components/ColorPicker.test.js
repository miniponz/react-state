import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('color picker', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color to purple on click', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('Purple');
  });


});
