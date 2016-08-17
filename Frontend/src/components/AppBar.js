import React from 'react';
import Appbar from 'material-ui/AppBar';
import { Link } from 'react-router'

const styles = {
  whiteColor: {
    color: 'white',
  },
};
const AppBar = () => (
  <Appbar
    title={<Link to="/" style={styles.whiteColor}>Service Disruption Management</Link>}
  />
);

export default AppBar;