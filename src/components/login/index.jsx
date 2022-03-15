/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { navigate } from 'gatsby-link';
import { Helmet } from 'react-helmet';
import { loginStyles } from './styles';

export default function Login({ login }) {
  const classes = loginStyles();
  const [userData, setUserData] = useState({ email: '', password: '', 'log-in': 'LOG+IN' });

  // const validateLogin = async () => {
  //   const userInfo = { password: userData.password, entryId: '1UCKYJ4A9guCWzutfDjbwc' };
  //   const response = await axios.post('https://5cu7ilab80.execute-api.us-west-2.amazonaws.com/loginfirst/fetch-login', userInfo);
  //   if (response.data.body.password === userData.password) {
  //     login();
  //     navigate('/');
  //   }
  // };

  const localLogin = () => {
    if (process.env.GATSBY_PASSWORD === userData.password) {
      login();
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validateLogin();
    localLogin();
  };

  return (
    <div>
      <div className={classes.loginForm}>
        <Grid
          className={classes.root}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item lg={12}>
            <Typography variant="h4">Welcome!</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="body2" className={classes.singinText}>Please sign in with your email or username and the password provided to you</Typography>
          </Grid>
          <Grid item lg={12} className={classes.fullWidth}>
            <form container autoComplete="off" fullWidth onSubmit={handleSubmit}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="User Name"
                  variant="outlined"
                  onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                />

                <Button type="submit" fullWidth variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.loginFooter}
      >
        <Grid item>
          <Typography className={classes.links}>
            <Link href="#">
              Privacy Notice
            </Link>
            <Link href="#">
              Terms of Use
            </Link>
            <Link href="#">
              Do Not Sell My Personal Information
            </Link>
            <span id="teconsent" className={classes.cookieLink} />
            <Helmet>
              <script async="async" src="//consent.trustarc.com/notice?domain=cartus.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1" crossOrigin="" />
            </Helmet>
          </Typography>

        </Grid>
        <Grid>
          <Typography>@ 2021 Logo</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
