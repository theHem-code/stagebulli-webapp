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

// const sendEmail = (e) => {
//   e.preventDefault();
//   emailjs
//     .sendForm(
//       "Gmail",
//       "template_565gdoy",
//       e.target,
//       "user_LkqF3nBSC3biR9i4iRxRm"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );

//   e.target.reset();
// };

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
  firma: "",
  email: "",
  telefon: "",
  teilnehmer: " - ",
  datum: new Date(),
  info: "",
};

const Kontakt = (validatesOnChange = false) => {
  const [participans, setParticipans] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validatesOnChange) validates({ [name]: value });
  };

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

  const handleSubmit = () => {
    if (validates()) {
      sendEmail();
      window.alert("true");
    } else {
      window.alert("false");
    }
  };

  const validates = (fieldValues = values) => {
    const re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const temp = { ...errors };
    if ("vorname" in fieldValues)
      temp.vorname = values.vorname ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = re.test(values.email) ? "" : "Email is invalid.";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const classes = useStyles();

  return (
    <main id="kontakt" style={{ height: "100%" }} className="container">
      {/* <Grid container spacing={2}>
        <Grid item xs={12}> */}
          <section className="row header">
            <h4 className="col-12">Was darf's sein?</h4>
          </section>
        {/* </Grid>
      </Grid> */}
      <form onSubmit={handleSubmit}>
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
                    value={state.checkedA ? "✅" : "🚫"}
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
                    value={state.checkedB ? "✅" : "🚫"}
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
                    value={state.checkedC ? "✅" : "🚫"}
                  />
                }
              />
            </Grid>
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
            <Grid item xs={12} md={6}>
              <CssTextField
                fullWidth
                className={classes.margin}
                variant="outlined"
                label="Vorname"
                name="vorname"
                value={values.vorname}
                onChange={handleInput}
                error={errors.vorname}
                helperText={errors.vorname}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Nachname"
                name="nachname"
                variant="outlined"
                fullWidth
                value={values.nachname}
                onChange={handleInput}
                error={errors.nachname}
                helperText={errors.nachname}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                className={classes.margin}
                label="Firma"
                name="firma"
                variant="outlined"
                fullWidth
                value={values.firma}
                onChange={handleInput}
                error={errors.firma}
                helperText={errors.firma}
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
                value={values.email}
                onChange={handleInput}
                error={errors.email}
                helperText={errors.email}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField
                className={classes.margin}
                label="Telefonnummer"
                name="telefon"
                variant="outlined"
                fullWidth
                value={values.telefon}
                onChange={handleInput}
                error={errors.telefon}
                helperText={errors.telefon}
              />
            </Grid>
            {/* Teilnehmerzahl */}
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  name="teilnehmer"
                >
                  Erwartete Teilnehmerzahl
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={participans}
                  onChange={handleCount}
                  label="Erwartete Teilnehmerzahl"
                  name="teilnehmer"
                >
                  <MenuItem value={10}> </MenuItem>
                  <MenuItem value={20}> – </MenuItem>
                  <MenuItem value={30}>bis zu 100</MenuItem>
                  <MenuItem value={40}>100 - 200</MenuItem>
                  <MenuItem value={50}>200 - 500</MenuItem>
                  <MenuItem value={60}>mehr als 500</MenuItem>
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
                  name="datum"
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
                name="info"
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
