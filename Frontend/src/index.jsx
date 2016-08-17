import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionPage} from './components/ServiceDisruptionPage'
import {ManageServiceDisruption} from './components/ManageServiceDisruption'
import {ServiceDisruptionList} from './components/ServiceDisruptionList'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={ServiceDisruptionPage}>
          <IndexRoute component={ServiceDisruptionList} />
          <Route path="add" component={ManageServiceDisruption}>
          </Route>
        </Route>
      </Router>
    )
  }
}

injectTapEventPlugin();

render(<App/>, document.querySelector("#app"));
