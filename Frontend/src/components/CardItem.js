import { default as React, Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {StationView} from './StationView'
import {Dialog} from './Dialog'
import { Link } from 'react-router'
import data from './data.js';

const styles = {
  cardButtons: {
    paddingTop: '0px',
  },
  editButton: {
    top: "12px",
  }
};


export class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deleteDialogOpen: false,
    }
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
    this.getName = this.getName.bind(this);
  }

  showDeleteDialog(){
    this.setState({
      deleteDialogOpen: true,
    });
  }

  closeDeleteDialog(){
    this.setState({
      deleteDialogOpen: false,
    });
  }

  handleDelete(data){
    this.props.onDelete(data);
  }

  getName(obj, key, value){
    let row = obj.filter(function( item ) {
      return item[key] == value;
    });
    return row[0].name

  }

  render() {
    let line = this.getName(data.routes, "id", this.props.data.line);
    let fromStation = this.getName(data.routes[this.props.data.line -1].branches, "id", this.props.data.fromStation);
    let toStation = this.getName(data.routes[this.props.data.line -1].branches, "id", this.props.data.toStation);
    let title = `Disconnection between ${fromStation} and ${toStation}` 
    let subtitle = line
    let query = {
      line: this.props.data.line,
      fromStation: this.props.data.fromStation,
      toStation: this.props.data.toStation,
      description: this.props.data.description,
    }
    let link = <Link to={{ pathname: '/add', query: query }}/>
    let description = this.props.data.description
    return(
      <Card>
        <Dialog onDelete={this.handleDelete.bind(this, this.props.data)} onClose={this.closeDeleteDialog} open={this.state.deleteDialogOpen} />
        <CardHeader
          title={title}
          avatar="http://www.ttc.ca/images/schedules_maps/line_one.png"
          subtitle={subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions style={styles.cardButtons}>
          <FlatButton label="Edit" primary={true} containerElement={link} style={styles.editButton} />
          <FlatButton label="Delete" secondary={true} onTouchTap={this.showDeleteDialog}/>
        </CardActions>
        <CardText expandable={true}>
          {description}
          <StationView 
            line = {this.props.data.line}
            fromStation = {this.props.data.fromStation}
            toStation = {this.props.data.toStation}
          />
        </CardText>
      </Card>
    )
  }
}