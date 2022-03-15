/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { themeStyles } from '../../styles';
import { myStyles } from '../signuppopup/styles';

export default function LegalAgreement({ context }) {
  const classes = myStyles();
  const themeClass = themeStyles();
  return (
    <div className={classes.root}>
      <div className={classes.prev}>
        <Link to={`/signup/${context?.previous?.screenType.toLowerCase().replace(/\s/g, '')}`}>
          <div className={classes.backPage}>
            <ArrowBackIcon />
            {' '}
            Previous
          </div>
        </Link>
        <div className={classes.backPage}>
          <ContactSupportIcon />
          {' '}
          <Typography variant="caption">Have a questions</Typography>
        </div>

        <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
          <CloseIcon />
        </IconButton>
      </div>
      <Container maxWidth="sm" className={classes.amount}>
        <Grid container spacing={3} />
      </Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Link to={`/signup/${context?.next?.screenType.toLowerCase().replace(/\s/g, '')}`}>
          <Button variant="contained" className={clsx(themeClass.themeBtn, themeClass.themePrimaryBtn)}>
            Next
          </Button>

        </Link>
      </Grid>
      <Button className={classes.disclaimer}>Reward Disclaimer</Button>
    </div>
  );
}
