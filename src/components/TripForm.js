import React from 'react';
// import logo from './logo.svg';
import '../css/TripForm.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    textAlign: 'left'
  },
  textField: {
    width: "100%",
    margin: theme.spacing(1),
  },
  pickerField: {
    width: "50%",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitSpacing: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1)
  },
  spacing1: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(0)
  },
}));

function TripForm() {
  const classes = useStyles();
  const [values, setValue] = React.useState({
    age: "29",
    tripName: "",
    city: "",
    fear: "",
    is18: null
  })
  const handleChange = fieldName => event => setValue({...values, [fieldName]: event.target.value})
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
   // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = date => setSelectedDate(date);
  const valuetext = value => `${value}°C`;

  return (
    <div className="tripform">
      <br /><br />
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Podaj nazwę wycieczki"
            className={classes.textField}
            value={values.tripName}
            onChange={(e) => handleChange("tripName")(e)}
            margin="normal"
            variant="outlined"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-city-simple">Miejscowość z której jedziesz</InputLabel>
            <Select
              autoWidth={false}
              value={values.city}
              onChange={handleChange("city")}
              labelWidth={220}
              inputProps={{
                name: 'city',
                id: 'outlined-city-simple',
              }}
            >
              <MenuItem value="Warszawa">Warszawa</MenuItem>
              <MenuItem value="Kraków">Kraków</MenuItem>
              <MenuItem value="Rzeszów">Rzeszów</MenuItem>
            </Select>
          </FormControl>    

          <MuiPickersUtilsProvider utils={DateFnsUtils}> 
            <KeyboardDatePicker
              margin="normal"
              className={classes.pickerField}
              id="date-picker-dialog"
              label="Wybierz datę wyjazdu"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          
          <div className={classes.spacing1}>
            <Typography id="discrete-slider" gutterBottom>
              Twoje doświadczenie górskie
            </Typography>
            <Slider
              marks
              defaultValue={10}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              min={10}
              max={100}
            />
          </div>
        
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
              label="Czy wycieczka ma być widoczna dla wszytskich?"
              className={classes.spacing1}
            />
          </FormGroup>

          <Button size="large" className={classes.submitSpacing} variant="contained" color="primary">
            Send data
          </Button>
        </form>
    </div>
  );
}

export default TripForm;
