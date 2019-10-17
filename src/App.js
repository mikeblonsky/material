import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    textAlign: 'left'
  },
  textField: {
    minWidth: 400,
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  checkboxSpacing: {
    margin: theme.spacing(1),
  }
}));

function App() {
  const classes = useStyles();
  const [values, setValue] = React.useState({
    age: "29",
    name: "",
    city: "",
    fear: "",
    is18: null
  })
  const handleChange = fieldName => event => {
    setValue({...values, [fieldName]: event.target.value})
  }

  console.log("STATE:", values);
  return (
    <div className="App">
      <br /><br />
        <form className={classes.container} noValidate autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-simple">Age</InputLabel>
            <Select
              autoWidth={false}
              value={values.age}
              onChange={handleChange("age")}
              labelWidth={40}
              inputProps={{
                name: 'age',
                id: 'outlined-age-simple',
              }}
            >
              <MenuItem value="None"><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="City"
            className={classes.textField}
            value={values.city}
            onChange={(e) => handleChange("city")(e)}
            margin="normal"
            variant="outlined"
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.is18}
                  onChange={handleChange('agreeIs18')}
                  value="agreeIs18"
                  color="primary"
                />
              }
              label="Do you have 18?"
              className={classes.checkboxSpacing}
            />
          </FormGroup>

          <Button size="large" variant="contained" color="primary">
            Send data
          </Button>
        </form>
    </div>
  );
}

export default App;
