import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionList} from './ServiceDisruptionList'
import {ServiceDisruptionForm} from './ServiceDisruptionForm'
import AppBar from './AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3498db',
  },
});

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