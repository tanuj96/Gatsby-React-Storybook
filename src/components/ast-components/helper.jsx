/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { myStyles } from '../signuppopup/styles';
import { themeStyles } from '../../styles';

export default function Helper({ helperData, helperSwitch }) {
  const classes = myStyles();
  const themeClass = themeStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.prev}>
          <div className={classes.backPage}>
            {' '}
            <Button onClick={helperSwitch}>
              {' '}
              <ArrowBackIcon />
              {' '}
              Back
            </Button>
          </div>
          <div className={classes.backPage}> </div>
          <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid
          spacing={3}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>{helperData.helperLabel}</h1>
          <p>{helperData.helperText.internal.content}</p>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6">Still Have Questions?</Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" className={clsx(themeClass.button)}>
            Reach A Representative
          </Button>
        </Grid>
      </div>

    </>
  );
}
