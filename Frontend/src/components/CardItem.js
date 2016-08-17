import { default as React, Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {StationView} from './StationView'
import {Dialog} from './Dialog'

const styles = {
  cardButtons: {
    paddingTop: '0px',
  },
};


export class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deleteDialogOpen: false,
    }
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
  }

  showDeleteDialog(){
    this.setState({
      deleteDialogOpen: true,
    });
  }

  handleDelete(data){
    // Logic for deleting the object
    this.setState({
      deleteDialogOpen: false
    });
  }

  render() {
    let title = `Disconnection between ${this.props.data.title} ` 
    let subtitle = this.props.data.subtitle
    return(
      <Card>
        <Dialog onDelete={this.handleDelete.bind(this, this.props.data)} open={this.state.deleteDialogOpen} />
        <CardHeader
          title={title}
          avatar="http://www.ttc.ca/images/schedules_maps/line_one.png"
          subtitle={subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions style={styles.cardButtons}>
          <FlatButton label="Edit" primary={true} />
          <FlatButton label="Delete" secondary={true} onTouchTap={this.showDeleteDialog}/>
        </CardActions>
        <CardText expandable={true}>
          <StationView />
        </CardText>
      </Card>
    )
  }
}