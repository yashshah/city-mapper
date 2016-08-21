import React from 'react';
import expect from 'expect';
import {ServiceDisruptionForm} from './ServiceDisruptionForm';
import {shallow} from 'enzyme';

let item = {
  "id": 2,
  "line": 1,
  "fromStation": 7,
  "toStation": 30,
  "description": "Pariatur ut magna incididunt reprehenderit pariatur laboris."
}

function setup(isQuery) {
  const props = {
    location: {
      query: isQuery ? item : {}
    }
  };
  return shallow(<ServiceDisruptionForm {...props} />);
}

describe('Service Disruption Form', () => {

  it('should render Snackbar', () => {
    let wrapper = setup(false);
    expect(wrapper.find('Snackbar').length).toBe(1);
  });

  it('Should render form 3 selectbox, 1 text field and 1 submit button', () => {
    let wrapper = setup(false);
    expect(wrapper.find('SelectField').length).toBe(3);
    expect(wrapper.find('TextField').length).toBe(1);
    expect(wrapper.find('RaisedButton').length).toBe(1);
  });

  it('should render Snackbar error on submit button click when fields are empty', () => {
    let wrapper = setup(false);
    wrapper.find('RaisedButton').simulate('touchTap');
    expect(wrapper.find('Snackbar').prop('open')).toBe(true);
    expect(wrapper.find('Snackbar').prop('message')).toBe('Please fill all the fields!');
  });

  it('Should display data from query props', () => {
    let wrapper = setup(true);
    expect(wrapper.state('id')).toBe(2);
    expect(wrapper.state('line')).toBe(1);
    expect(wrapper.state('fromStation')).toBe(7);
    expect(wrapper.state('toStation')).toBe(30);
    expect(wrapper.state('description')).toBe("Pariatur ut magna incididunt reprehenderit pariatur laboris.");
  });

});
