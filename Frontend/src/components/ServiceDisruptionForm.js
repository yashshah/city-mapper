import { default as React, Component } from 'react';
import { render } from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import data from './data.js';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  customWidth: {
    width: "100%",
  },
};


export class ServiceDisruptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: props.location.query.line ? parseInt(props.location.query.line) : null,
      fromStation: props.location.query.fromStation ? parseInt(props.location.query.fromStation -1) : null,
      toStation: props.location.query.toStation ? parseInt(props.location.query.toStation -1) : null,
      description: '' || props.location.query.description
      submit: false,
      toastOpen: false,
      toastMessage: ""
    };
    this.addDisruption = this.addDisruption.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  addDisruption(){
    this.props.onSubmit(this.state);
  }
  handleRequestClose(){
    this.setState({
      toastOpen: false,
    });
  }

  handleChange(key, e, index, value){
    var state = {};
    state[key] = key !== 'description' ? parseInt(value) : e.target.value;
    this.setState(state);
  }

  render() {
    let lines = data.routes.map((route,i) => {
      return <MenuItem value={route.id} key={i} primaryText={route.name} />
    });

    let stations = [];
    
    if (this.state.line) {
      stations = data.routes[this.state.line - 1].branches.map((station,i) => {
        return <MenuItem value={station.id} key={station.id} primaryText={station.name} />
      })
    }

    return(
      <div className="row service-form-head">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-content grey-text service-form-body">
              <h4 className="card-title black-text center">Add Service Disruption</h4>
              <div className="row ">
                <div className="col s12 m12 l4">
                  <SelectField
                    value={this.state.line}
                    onChange={this.handleChange.bind(this, 'line')}
                    floatingLabelText="Select Line"
                    style={styles.customWidth}
                  >
                    {lines}
                  </SelectField>
                </div>
                <div className="col s12 m12 l4">
                  <SelectField
                    value={this.state.fromStation}
                    onChange={this.handleChange.bind(this, 'fromStation')}
                    floatingLabelText="From Station"
                    style={styles.customWidth}
                  >
                    {stations}
                  </SelectField>
                </div>
                <div className="col s12 m12 l4">
                  <SelectField
                    value={this.state.toStation}
                    onChange={this.handleChange.bind(this, 'toStation')}
                    floatingLabelText="To Station"
                    style={styles.customWidth}
                  >
                    {stations}
                  </SelectField>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                   <TextField
                    hintText="Description about the disruption"
                    onChange={this.handleChange.bind(this, 'description')}
                    value={this.state.description}
                    required={true}
                    multiLine={true}
                    style={styles.customWidth}
                    rows={4}
                  /><br />
                </div>
              </div>
              <div className="row center ">
                <Snackbar
                  open={this.state.toastOpen}
                  message={this.state.toastMessage}
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
                <RaisedButton
                  label="Add Service Disruption"
                  className="waves-effect waves-light"
                  primary={true}
                  onTouchTap={this.addDisruption}
                  disabled={this.state.submit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

