import { default as React, Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {CardItem} from './CardItem';
import serviceDisruptionData from './database.js'

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

// const serviceDisruptionData = [
//   {
//     title: 'Toronto - Paris',
//     subtitle: '...Bond. James Bond.',
//   },
//   {
//     title: 'New York - Boston',
//     subtitle: 'Of all the gin joints in all the towns in all the world, she walks into mine.',
//   },
//   {
//     title: 'San Fransico - Seattle',
//     subtitle: 'Well, its not the men in your life that counts, its the life in your men.',
//   },
//   {
//     title: 'Bangkok - Hanoi',
//     subtitle: 'Would you be shocked if I put on something more comfortable?',
//   },
//   {
//     title: 'Delhi - Bangalore',
//     subtitle: 'My Mama always said, Life was like a box of chocolates; you never know what you are gonna get.',
//   },
//   {
//     title: 'Rome - Venice',
//     subtitle: 'I could dance with you till the cows come home...On second thought, I had rather dance with the cows when',
//   },
//   {
//     title: 'Munich - Frankfurt',
//     subtitle: 'Frankly, my dear, I dont give a damn!',
//   },
//   {
//     title: 'Seattle - Portland',
//     subtitle: 'You talking to me? You talking to me? You talking to me? Well, who the hell else are you talking to?',
//   },
//   {
//     title: 'Barcelona - Madrid',
//     subtitle: 'Gimme a whiskey, ginger ale on the side. And dont be stingy, baby.',
//   },
// ];

export class ServiceDisruptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogOpen: false,
      items: serviceDisruptionData.serviceDisruption
    }
    this.handleDelete = this.handleDelete.bind(this);
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
      </div>
    )
  }
}

