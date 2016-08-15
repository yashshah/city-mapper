import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionList} from './ServiceDisruptionList'

export class ServiceDisruptionPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return(
      <div>
        <h3> Service Disruption Page </h3>
        <ServiceDisruptionList />
      </div>
    )
  }
}