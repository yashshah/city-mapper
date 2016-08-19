import React from 'react';
import Appbar from 'material-ui/AppBar';
import data from './data.js';

export const StationView = (props) => {
  let minElement =  Math.min(props.fromStation, props.toStation)
  let diffElement = Math.abs(props.fromStation - props.toStation)
  console.log(minElement, diffElement)
  let disruptedStations = Array.from(new Array(diffElement + 1), (x,i) => i + minElement)
  let disruptedStationsNames = getName(data.routes[props.line -1].branches, "id", disruptedStations);
  return (
  <div>
    <div className="bar" />
    <div className="timeline">
      {disruptedStationsNames.map((item) => (
        <Item stationItem={item.stationName} key={item.key} status={item.status} />
      ))}
    </div>
  </div>
  )
};


let Item = (props) => (
  <div className={props.status}>
    <p>{props.stationItem}</p>
  </div>
);

function getName(obj, key, disruptedStations){
  let list = []
  obj.map(function( item ) {
    if(disruptedStations.indexOf(item[key]) !== -1){
      list.push({
        stationName: item.name,
        status: "disrupted",
        key: item[key]
      })
    }else{
      list.push({
        stationName: item.name,
        status: "entry",
        key: item[key]
      })
    }
  });
  return list;
}