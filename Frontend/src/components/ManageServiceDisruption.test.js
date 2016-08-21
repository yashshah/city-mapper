import React from 'react';
import expect from 'expect';
import {ManageServiceDisruption} from './ManageServiceDisruption';
import {mount, shallow} from 'enzyme';

describe('Index', () => {
  it('should render ServiceDisruptionForm', () => {
    let wrapper = shallow(<ManageServiceDisruption />);
    expect(wrapper.find('ServiceDisruptionForm').length).toBe(1);
  });
});
