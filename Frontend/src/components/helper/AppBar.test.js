import React from 'react';
import expect from 'expect';
import AppBar from './AppBar';
import {shallow} from 'enzyme';

describe('App Bar', () => {
  it('should have link href to /', () => {
    let wrapper = shallow(<AppBar />);
    expect(wrapper.prop('title').props.to).toBe('/');
  });
});
