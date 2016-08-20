import React from 'react';
import Appbar from 'material-ui/AppBar';
import { Link } from 'react-router'
import styles from '../../styles/styles.js'

const AppBar = () => (
  <Appbar
    title={<Link to="/" style={styles.whiteColor}>Service Disruption Management</Link>}
  />
);

export default AppBar;