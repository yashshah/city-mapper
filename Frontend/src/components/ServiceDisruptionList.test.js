import React from 'react';
import expect from 'expect';
import {ServiceDisruptionList} from './ServiceDisruptionList';
import {mount, shallow} from 'enzyme';

let item = {
  "id": 2,
  "line": 1,
  "fromStation": 7,
  "toStation": 30,
  "description": "Pariatur ut magna incididunt reprehenderit pariatur laboris."
}

function setup(isSubmit) {
  const props = {
    location: {
      query: {
        submit: isSubmit
      }
    }
  };

  return shallow(<ServiceDisruptionList {...props} />);
}

describe('Service Disruption List component', () => {

  it('should render Snackbar', () => {
    let wrapper = setup(false);
    expect(wrapper.find('Snackbar').length).toBe(1);
  });

  it('should render Snackbar when submit is true', () => {
    let wrapper = setup(true);
    expect(wrapper.find('Snackbar').prop('open')).toBe(true);
    expect(wrapper.find('Snackbar').prop('message')).toBe('Service disruption saved successfully!');
  });

  it('Should render ListItem', () => {
    let wrapper = setup(false);
    wrapper.setState({
      items: [item]
    })
    expect(wrapper.find('ListItem').length).toBe(1);
  });

  it('Should pass data and onDelete props on ListItem', () => {
    let wrapper = setup(false);
    wrapper.setState({
      items: [item]
    })
    expect(wrapper.find('ListItem').prop('data')).toExist();
    expect(wrapper.find('ListItem').prop('onDelete')).toExist();
  });
  
});
