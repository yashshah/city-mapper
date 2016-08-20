import { default as React, Component } from 'react';
import { render } from 'react-dom';
import {ServiceDisruptionList} from './ServiceDisruptionList'
import {ServiceDisruptionForm} from './ServiceDisruptionForm'
import AppBar from './helper/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router'
import styles from '../styles/styles.js'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2196F3',
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
              {this.props.children}
            </div>
             <FloatingActionButton 
                containerElement={<Link to="/add" />}
                style={styles.addButton}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}