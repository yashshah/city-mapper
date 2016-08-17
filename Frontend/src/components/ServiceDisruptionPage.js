import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionList} from './ServiceDisruptionList'
import {ServiceDisruptionForm} from './ServiceDisruptionForm'
import AppBar from './AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class ServiceDisruptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar />
            <div className="container">
              <ServiceDisruptionList />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}