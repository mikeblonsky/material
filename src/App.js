import React from 'react';
import logo from './logo.svg';
import './App.css';
import TripForm from "./components/TripForm";
import TopBar from "./components/layout/TopBar";


import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: 'red',
  },
}));

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <TopBar />
        <TripForm />
      </div>
    );
  }
}
export default withStyles(styles)(App);