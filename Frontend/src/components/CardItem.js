import { default as React, Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {StationView} from './StationView'
import {Dialog} from './Dialog'
import { Link } from 'react-router'

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

  render() {
    let title = `Disconnection between ${this.props.data.title}` 
    let subtitle = this.props.data.subtitle
    let link = <Link to={{ pathname: '/add', query: { line: 1, fromStation: 1, toStation: 5, description: "Testig" } }}/>
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
          <StationView />
        </CardText>
      </Card>
    )
  }
}