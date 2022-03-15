import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { themeStyles } from '../../styles';
import { myStyles } from './styles';
import LeadFormLoading from './leadFormLoading';
import { constructPayloadForSubmitLead } from "./submitForm";
import ThemeContext from '../../utils/theme-context';

export default function ErrorPage() {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);

  const closeModal = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <Container className={classes.root}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <div className={classes.leadFormHelperBar}>
          <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Oops! Something went wrong. Please try again later</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Button onClick={closeModal} variant="contained" className={clsx(globalThemeCss.button, classes.nextButton)}>Close</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
