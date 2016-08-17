import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionPage} from './components/ServiceDisruptionPage'
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
  render() {
    return(
      <div>
        <ServiceDisruptionPage / >
      </div>
    )
  }
}

injectTapEventPlugin();

render(<App/>, document.querySelector("#app"));
