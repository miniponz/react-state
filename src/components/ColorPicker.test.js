import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('color picker', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color to purple on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler}/>);
    wrapper.find('button').at(0).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('purple');
  });

  it('changes color to purple on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler}/>);
    wrapper.find('button').at(1).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('blue');
  });

  it('changes color to purple on click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler}/>);
    wrapper.find('button').at(2).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('green');
  });

});
