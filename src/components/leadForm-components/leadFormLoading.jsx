import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { myStyles } from './styles';

export default function LeadFormLoading() {
  const classes = myStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={6} direction="column" justifyContent="center" alignItems="center" className={classes.loading}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper, classes.customAlign}>
            <CircularProgress color="black" />
            <Typography variant="h2">Submitting your request...</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
