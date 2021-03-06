import { default as React, Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {ListItem} from './helper/ListItem';
import axios from 'axios'
import config from '../config.js'
import Snackbar from 'material-ui/Snackbar';
import styles from '../styles/styles.js'

export class ServiceDisruptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogOpen: false,
      items: [],
      toastOpen: props.location.query.submit ? true : false,
      toastMessage: "Service disruption saved successfully!",
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    let self = this;
    axios({
      url: config.serverPath,
      method: 'get',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(config.username + ':' + config.password).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {
      self.setState({
        items: response.data 
      });
    })
    .catch(function (error) {
      self.setState({
        toastOpen: true,
        toastMessage: "Error fetching the results. Please check if server is running!"
      });
    });
  }

  handleRequestClose(){
    this.setState({
      toastOpen: false,
    });
  }

  handleDelete(data){
    let updatedItems = this.state.items;
    updatedItems = updatedItems.filter(function( obj ) {
      return obj.id !== data.id;
    });
    let self = this;
    axios({
      url: config.serverPath + data.id,
      data: this.state,
      method: 'delete',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(config.username + ':' + config.password).toString('base64'))
      },
      json: true
    })
    .then(function (response) {
      self.setState({
        deleteDialogOpen: false,
        items: updatedItems,
        toastOpen: true,
        toastMessage: "Service disruption deleted!"
      });
    })
    .catch(function (error) {
      self.setState({
        deleteDialogOpen: false,
        toastOpen: true,
        toastMessage: "Error delete the service disruption!"
      });
    });
  }

  render() {
    return(
      <div className="row">
        {this.state.items.map((data) => (
          <div className="col s12 m12" key={data.id} style={styles.gridList}>
            <ListItem data={data} onDelete={this.handleDelete} />
          </div>
        ))}
        <Snackbar
          open={this.state.toastOpen}
          message={this.state.toastMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
      )
  }
}

