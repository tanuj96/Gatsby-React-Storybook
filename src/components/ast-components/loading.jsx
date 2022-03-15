import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { myStyles } from '../signuppopup/styles';

export default function Loading() {
  const classes = myStyles();
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
        <CircularProgress color="black" />
        <h1>Loading</h1>
      </Grid>
    </div>
  );
}
