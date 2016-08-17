import React from 'react';
import Appbar from 'material-ui/AppBar';
import styles from '../styles/index.css';

export const StationView = ({stationList = ["Toronto", "New York", "Boston", "London", "Paris"]}) => (
  <div>
    <div className={styles.bar} />
    <div className={styles.timeline}>
      {stationList.map((stationName) => (
        <Item stationItem={stationName} key={stationName} />
      ))}
    </div>
  </div>
);


let Item = ({stationItem}) => (
  <div className={styles.entry}>
    <p>{stationItem}</p>
  </div>
);