import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { browserHistory } from "react-router";
import Dashboard from '../DashboardLayout.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [state, setState] = useState({
    form: {
      username: "",
      password: "",
    },
  });
  //Metodo para capturar datos
  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const [showError, setShowError] = useState(false);
  const classes = useStyles();
  const requestAuth = async (event) => {
    event.preventDefault();
    return fetch("https://app-unac-virtual-tracking.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.form.username,
        password: state.form.password,
      }),
    })
      .then((data) => {
        console.log(data);
        if (data.ok) {
          //Aqui va la ruta del Dashboard
          window.location.assign('app/dashboard');
        } else {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Usuario o correo"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={requestAuth}
          >
            Iniciar sesión
          </Button>

          <Button
            href="/registro"
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Registrate
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidasde tu clave?
              </Link>
              {showError && <div>ERROR EN LA AUTENTICACIÓN</div>}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} />
    </Container>
  );
}
