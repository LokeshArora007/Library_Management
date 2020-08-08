import React from 'react';
import {
  makeStyles,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as backgroundImage from '../../assets/images/bg.jpg';
import { useStoreActions } from 'easy-peasy';
import LocalStorageService from '../../services/localStorage';
const localStorageService = LocalStorageService.getService();

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotPass: {
    padding: '10px 0px',
    textAlign: 'right',
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const userAction = useStoreActions((actions) => actions.login);

  // Set initial empty values for email and password
  const data = {
    username: '',
    password: '',
  };

  // Yup schema for validation of form fields
  const schema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });
  // Submit form with username and password
<<<<<<< HEAD
  const onFormSubmit = async (values, { setErrors }) => {
        localStorageService.setLoginInfo({
          accessToken: 'safhakjsdhfjasdfhjalsdljfasf',
          refreshToken: 'sdafkjasdhfsajdhfjasd',
          userInfo: JSON.stringify(values.username),
        });
    props.history.push('/');
  }
=======
   // Submit form with username and password
   const onFormSubmit = async (values, { setErrors }) => {
    localStorageService.setLoginInfo({
      accessToken: 'safhakjsdhfjasdfhjalsdljfasf',
      refreshToken: 'sdafkjasdhfsajdhfjasd',
      userInfo: JSON.stringify(values.username),
    });
props.history.push('/');
}
>>>>>>> 40fe04eb08ec61a445a98053d4c29ceac34b5fe2

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={classes.image} />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in to your account
          </Typography>
          <Formik
            initialValues={data}
            onSubmit={onFormSubmit}
            validateOnBlur={false}
            validationSchema={schema}
            enableReinitialize={true}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.username}
                  required
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="username"
                  label="User Name"
                  name="username"
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                  autoFocus
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  required
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <div className={classes.forgotPass}>
                  <a className={classes.anchor} href="./forgotpassword" alt="">
                    Forgot your password?
                  </a>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}