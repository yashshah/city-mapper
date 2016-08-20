import { default as React, Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {CardItem} from './CardItem';
import serviceDisruptionData from './database.js'
import Snackbar from 'material-ui/Snackbar';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    paddingTop: '20px',
  },
};

export class ServiceDisruptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogOpen: false,
      items: serviceDisruptionData.serviceDisruption
      toastOpen: props.location.query.submit ? true : false,
      toastMessage: "Service disruption saved successfully!",
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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
    this.setState({
      deleteDialogOpen: false,
      items: updatedItems
    });

  }

  render() {
    return(
      <div className="row">
        {this.state.items.map((data) => (
          <div className="col s12 m12" key={data.id} style={styles.gridList}>
            <CardItem data={data} onDelete={this.handleDelete} />
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

