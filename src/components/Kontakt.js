import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";

const GreenCheckbox = withStyles({
  root: {
    color: "#f15025",
    "&$checked": {
      color: "#f15025",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#f15025",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f15025",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#f15025",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f15025",
      },
    },
  },
})(TextField);

const Kontakt = () => {

  const [participans, setParticipans] = React.useState("");
  const [selectedDate, handleDateChange] = useState(new Date());

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleCount = (event) => {
    setParticipans(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <main id="kontakt" style={{ height: "100vh", paddingTop: "100px" }}>
      <section className="header-start">
        <h4>Ruf mich an!</h4>
      </section>
      <div className="formwrapper">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <FormControlLabel
              label="Stage Bulli"
              control={
                <GreenCheckbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="+ Technikpaket"
              control={
                <GreenCheckbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
            />
          </Grid>
          <FormControlLabel
            label="+ Entertainmentpaket"
            control={
              <GreenCheckbox
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            }
          />

          <form className={classes.root} noValidate autoComplete="off">
            <CssTextField
              className={classes.margin}
              label="Vorname"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            <CssTextField
              className={classes.margin}
              label="Nachname"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            <CssTextField
              className={classes.margin}
              label="Firma"
              variant="outlined"
              id="custom-css-outlined-input"
            />



            <CssTextField
              className={classes.margin}
              label="Email"
              variant="outlined"
              id="custom-css-outlined-input"
            />{" "}
            <CssTextField
              className={classes.margin}
              label="Telefonnummer"
              variant="outlined"
              id="custom-css-outlined-input"
            />
              {/* Teilnehmerzahl */}
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Erwartete Teilnehmerzahl
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={participans}
                onChange={handleCount}
                label="Erwartete Teilnehmerzahl"
              >
                <MenuItem value={10}>bis zu 100</MenuItem>
                <MenuItem value={20}>100 - 200</MenuItem>
                <MenuItem value={30}>200 - 500</MenuItem>
                <MenuItem value={30}>mehr als 500</MenuItem>
              </Select>
            </FormControl>

            <CssTextField
              className={classes.margin}
              label="Was planst du fur ein Event?"
              variant="outlined"
              id="custom-css-outlined-input outlined-multiline-static outlined-full-width"
              multiline
              rows={4}
              fullWidth
            />
          
            {/* Veranstaltungsdatum */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Veranstaltungsdatum"
                format="dd/MM/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) => handleDateChange(date)}
              />
            </MuiPickersUtilsProvider>
          </form>
        </Grid>
      </div>
    </main>
  );
};

export default Kontakt;
