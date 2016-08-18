import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionForm} from './ServiceDisruptionForm';

export class ManageServiceDisruption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ServiceDisruptionForm {...this.props} />
    )
  }
}

