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


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(10),
  },
}));


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const [textValues, setTextValue] = React.useState({
      name: "",
      surName: ""
  });

  const handleChange = event => {
    setValue(event.target.value);
  };


  const handleInputChange = (fieldName, event) => {
    setTextValue({ ...textValues, [fieldName]: event.target.value });
  };
  // const handleInputChange = fieldName => event => {
  //   setTextValue({ ...textValues, [fieldName]: event.target.value });
  // };
  console.log("STATE: ", textValues);
  return (
    <div className="App">
        <header className="App-header"> 

        <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={textValues.name}
              onChange={(e) => handleInputChange("name", e)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Sure name"
              className={classes.textField}
              value={textValues.surName}
              onChange={(e) => handleInputChange("surName", e)}
              margin="normal"
              variant="outlined"
            />
        </form>


      
        <img src={logo} className="App-logo" alt="logo" />
     
        <Button variant="contained" color="primary">
          Hello World
        </Button>

        <div>selected: {value} </div>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup aria-label="GROUP_NAME" name="GROUP_NAME" value={value} onChange={handleChange}>
                <FormControlLabel labelPlacement="top" value="female11" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel labelPlacement="top" value="male11" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
      </header>
    </div>
  );
}

export default App;
