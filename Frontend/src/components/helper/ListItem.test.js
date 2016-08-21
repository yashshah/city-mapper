import React from 'react';
import expect from 'expect';
import {ListItem} from './ListItem';
import {shallow} from 'enzyme';

let item = {
  "id": 2,
  "line": 1,
  "fromStation": 7,
  "toStation": 30,
  "description": "Pariatur ut magna incididunt reprehenderit pariatur laboris."
}

function setup() {
  return shallow(<ListItem data={item} />);
}

describe('Service Disruption Form', () => {

  it('should render StationView', () => {
    let wrapper = setup();
    expect(wrapper.find('StationView').length).toBe(1);
  });

  it('should contain two buttons Edit and Delete', () => {
    let wrapper = setup();
    expect(wrapper.find('FlatButton').at(0).prop('label')).toBe('Edit');
    expect(wrapper.find('FlatButton').at(1).prop('label')).toBe('Delete');
  });


  it('Should open Delete dialog on Delete button click', () => {
    let wrapper = setup();
    wrapper.find('FlatButton').at(1).simulate('touchTap');
    expect(wrapper.find('Dialog').prop('open')).toBe(true);
  });

  it('Should have query paratemeters in edit button link', () => {
    let wrapper = setup();
    expect(wrapper.find('FlatButton').at(0).prop('containerElement').props.to.query).toEqual(item);
  });

  it('Should redirect to add page on edit button click', () => {
    let wrapper = setup();
    expect(wrapper.find('FlatButton').at(0).prop('containerElement').props.to.pathname).toBe('/add');
  });

});
