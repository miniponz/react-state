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
    wrapper.find('button').at(0).simulate('click', { target: { textContent: 'Purple' } });

    expect(wrapper.state('color')).toEqual('Purple');
  });
  it('changes color to purple on click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click', { target: { textContent: 'Blue' } });

    expect(wrapper.state('color')).toEqual('Blue');
  });
  it('changes color to purple on click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click', { target: { textContent: 'Green' } });

    expect(wrapper.state('color')).toEqual('Green');
  });

});
