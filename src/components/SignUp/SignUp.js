import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../Assets/images/logoBlack.png'

import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SaveYourWardrobe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [newUser,setUser] = React.useState({login:"",email:"",password:"",address:"",phoneNumber:"",trades:[],donations:[],reactions:[],sells:[]})



  const addUser =()=>{
    axios.post("http://localhost:4000/user",newUser)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
          <img src={logo} width="100%"/>

        <Typography component="h1" variant="h5">
          Sign up flow
        </Typography>
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e)=>newUser.login=e.target.value}
                autoComplete="fname"
                name="login"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={(e)=>newUser.phoneNumber=e.target.value}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Phone number"
                name="phoneNumber"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={(e)=>newUser.address=e.target.value}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={(e)=>newUser.email=e.target.value}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={(e)=>newUser.password=e.target.value}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button

            onClick={addUser}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}