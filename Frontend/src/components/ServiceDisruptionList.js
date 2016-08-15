import { default as React, Component } from 'react';
import { render } from 'react-dom';

export class ServiceDisruptionList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return(
      <div>
        <h5> All Service Disruptions </h5>
        <p> No Service disruption found! </p>
      </div>
    )
  }
}