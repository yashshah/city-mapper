import React from 'react';
import expect from 'expect';
import {ServiceDisruptionPage} from './ServiceDisruptionPage';
import {shallow} from 'enzyme';

describe('Service Disruption Page', () => {

  it('should render MuiThemeProvider', () => {
    let wrapper = shallow(<ServiceDisruptionPage />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });

  it('should render AppBar', () => {
    let wrapper = shallow(<ServiceDisruptionPage />);
    expect(wrapper.find('AppBar').length).toBe(1);
  });

  it('should render Add button', () => {
    let wrapper = shallow(<ServiceDisruptionPage />);
    expect(wrapper.find('FloatingActionButton').length).toBe(1);
  });

  it('should render children element', () => {
    let wrapper = shallow(<ServiceDisruptionPage />);
    expect(wrapper.find('.container').length).toBeGreaterThan(0);
  });

  it('should contain muiTheme prop', () => {
    let wrapper = shallow(<ServiceDisruptionPage />);
    expect(wrapper.find('MuiThemeProvider').prop('muiTheme')).toExist();
  });

});
