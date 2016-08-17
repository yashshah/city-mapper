import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionList} from './ServiceDisruptionList'
import {ServiceDisruptionForm} from './ServiceDisruptionForm'
import AppBar from './AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3498db',
  },
});

const style = {
  bottom:'40px',
  position:'fixed',
  right:'40px',
  zIndex:'998',
};
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
             <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}