import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionPage} from './components/ServiceDisruptionPage'

class App extends React.Component {
  render() {
    return(
      <div>
        <ServiceDisruptionPage / >
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
