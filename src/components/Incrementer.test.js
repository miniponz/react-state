import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrementer test', () => {
  it('renders incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increments count on button click', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('count')).toEqual(1);
  });
});
