import { default as React, Component } from 'react';
import MaterialDialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export class Dialog extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open)
      this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
    this.props.onClose();
  }

  handleDelete(){
    this.props.onDelete();
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Yes, Delete!"
        secondary={true}
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <div>
        <MaterialDialog
          title="Are you sure you want to Delete?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          This will delete the service disruption entry.
        </MaterialDialog>
      </div>
    );
  }
}