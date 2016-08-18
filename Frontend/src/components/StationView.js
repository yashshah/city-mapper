import React from 'react';
import Appbar from 'material-ui/AppBar';

export const StationView = ({stationList = ["Toronto", "New York", "Boston", "London", "Paris"]}) => (
  <div>
    <div className="bar" />
    <div className="timeline">
      {stationList.map((stationName) => (
        <Item stationItem={stationName} key={stationName} />
      ))}
    </div>
  </div>
);


let Item = ({stationItem}) => (
  <div className="entry">
    <p>{stationItem}</p>
  </div>
);