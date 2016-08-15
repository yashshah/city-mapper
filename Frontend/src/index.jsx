import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionForm} from './components/ServiceDisruptionForm'

class App extends React.Component {
  render() {
    return(
      <div>
        <ServiceDisruptionForm / >
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
