/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { myStyles } from './styles';

export default function BasicTextFields() {
  const classes = myStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h4"
              component="h4"
              className={classes.typoAlign}
            >
              Let's get started!
            </Typography>
            <Typography className={classes.typoAlign}>
              Tell us a little about yourself...
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <TextField
              id="filled-basic"
              label="First Name*"
              variant="filled"
              className={classes.inputWidth}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <TextField
              id="filled-basic"
              label="Last Name*"
              variant="filled"
              className={classes.inputWidth}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <TextField
              id="filled-basic"
              label="Email*"
              variant="filled"
              className={classes.inputWidth}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Paper className={classes.paper}>
            <TextField
              id="filled-basic"
              label="Primary Number*"
              variant="filled"
              className={classes.inputWidth}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="Toggle Button Group"
            >
              <ToggleButton value="left" aria-label="Mobile">
                Mobile
              </ToggleButton>
              <ToggleButton value="center" aria-label="Home">
                Home
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography>
              <Checkbox
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
              />
              {' '}
              By checking this box you agree to receive text messages from the
              Realogy Military Rewards Program. Consent is not a condition to
              participate in the Program. Terms of Use may be found here
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={clsx(classes.paper, classes.typoAlign)}>
            <Button className={classes.nextBtn} variant="contained">Next</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography>
              By clicking Next, I agree to have my information shared with a
              participating Real Estate Agent and the Realogy Military Rewards
              program to have them contact me by phone, email or text message
              including by automated means about real estate services. I also
              understand I can access real estate services without providing my
              phone number and can unsubscribe to marketing emails at any time.
              I acknowledge that I have read and agree to the Terms of Use,
              Privacy Policy and Affiliated Business Arrangement Disclosure.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
