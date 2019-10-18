import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
    marginLeft: theme.spacing(5),
  },
  button: {
    marginRight: theme.spacing(2),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" variant="h6">Zbieraj Góry</Typography>
          <div className={classes.grow}>
            <Link to="/">
              <Button color="inherit" className={classes.button}>Home</Button>
            </Link>
            <Link to="/profile-list">
              <Button color="inherit" className={classes.button}>Lista profili</Button>
            </Link>
            <Link to="/addTrip">
              <Button color="inherit" className={classes.button}>Dodaj wycieczkę</Button>
            </Link>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}