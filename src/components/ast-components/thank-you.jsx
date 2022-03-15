/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import { themeStyles } from '../../styles';
import { myStyles } from '../signuppopup/styles';
import Loading from './loading';

export default function ThankYou({ thanksData }) {
  const classes = myStyles();
  const themeClass = themeStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {loading
    && <Loading />}
      {!loading && (
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
            <Typography variant="h4">{thanksData.firstTitleForOffRamp}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{thanksData.secondTitleForOffRamp}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => navigate('/')} variant="contained" className={clsx(themeClass.button)}>
              {thanksData.labelForOffRampCloseButton}
            </Button>
          </Grid>
        </Grid>
      </div>
      )}
    </>
  );
}
