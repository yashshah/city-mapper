import React from 'react';
import expect from 'expect';
import {ManageServiceDisruption} from './ManageServiceDisruption';
import {shallow} from 'enzyme';

describe('Manage Service Disruption component', () => {
  it('should render ServiceDisruptionForm', () => {
    let wrapper = shallow(<ManageServiceDisruption />);
    expect(wrapper.find('ServiceDisruptionForm').length).toBe(1);
  });
});
