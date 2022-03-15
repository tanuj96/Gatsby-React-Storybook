import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { myStyles } from '../components/signuppopup/styles';
import { themeStyles } from '../styles';

export default function ThankYou() {
  const classes = myStyles();
  const themeClass = themeStyles();
  return (
    <div className={classes.root}>
      <Grid
        spacing={6}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.yesNo}
      >
        <Grid item>
          <Typography variant="h4">Thank You !</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">An advocate will be contacting you shortly.</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" className={clsx(themeClass.themeBtn, themeClass.themePrimaryBtn)}>
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
