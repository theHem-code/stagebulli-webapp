
import React, { useState } from "react";
import emailjs from "emailjs-com";

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

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "Gmail",
      "template_565gdoy",
      e.target,
      "user_LkqF3nBSC3biR9i4iRxRm"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const OrangeCheckbox = withStyles({
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
      width: "80ch",
    },
  },
  formControl: {
    margin: theme.spacing(0),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "primary",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "primary",
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary",
      },
    },
  },
})(TextField);

const initialValues = {
  vorname: "",
  nachname: "",
  firma: "test",
  email: "",
  telefonnumber: "",
  teilnehmer: " - ",
  datum: new Date(),
  info: ""
}


const Kontakt = () => {
  const [participans, setParticipans] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const [values, setValues] = useState(initialValues)

  const [state, setState] = useState({
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

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }



  const classes = useStyles();

  return (
    <main id="kontakt" style={{ height: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <section className="header">
            <h4>Was darf's sein?</h4>
          </section>
        </Grid>
      </Grid>
      <form onSubmit={sendEmail}>
        <div className="formwrapper">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                label="Stage Bulli"
                control={
                  <OrangeCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                label="+ Technikpaket"
                control={
                  <OrangeCheckbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                label="+ Entertainmentpaket"
                control={
                  <OrangeCheckbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                  />
                }
              />
            </Grid>
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Vorname"
                value={values.vorname}
                // name="vorname"
                variant="outlined"
                fullWidth
                error
                helperText="not correct"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Nachname"
                name="nachname"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                className={classes.margin}
                label="Firma"
                name="firma"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <div style={{ height: "100px" }}></div>
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Telefonnummer"
                name="telefon"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Teilnehmerzahl */}
            <Grid item xs={12} md={6}>
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
            </Grid>
            <div style={{ height: "100px" }}></div>
            <Grid item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  label="Veranstaltungsdatum"
                  fullWidth
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => handleDateChange(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                className={classes.margin}
                label="Wie kann der Stage Bulli deinem Event zum Erfolg verhelfen?"
                variant="outlined"
                id="custom-css-outlined-input outlined-multiline-static outlined-full-width"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
          </Grid>
          <div className="button-senden">
            <input type="submit" className="senden" value="Senden"></input>
            <div className="button-line"></div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Kontakt;

