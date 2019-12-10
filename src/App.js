import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import TripForm from "./components/TripForm";
import Home from "./containers/Home";
import ProfileList from "./containers/ProfileList";
import TopBar from "./components/layout/TopBar";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: 'red',
  },
}));
const TravelsList = () => <div>Lista aktywych wycieczek</div>;
const NoMatch = () => <div>Nie ma takiej strony</div>;
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile-list">
              <ProfileList />
            </Route>
            <Route exact path="/travels-list">
              <TravelsList />
            </Route>
            <Route exact path="/addTrip">
              <TripForm />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withStyles(styles)(App);