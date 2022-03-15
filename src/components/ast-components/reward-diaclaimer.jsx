/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { myStyles } from '../signuppopup/styles';

export default function RewardDisclaimer({ disclaimerData, disclaimerSwitch }) {
  const classes = myStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.prev}>
          <div className={classes.backPage}>
            {' '}
            <Button onClick={disclaimerSwitch}>
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
          <Container>
            <Typography variant="body2" className={classes.richTextPara}>
              {documentToReactComponents(JSON.parse(disclaimerData.raw))}
            </Typography>
          </Container>
        </Grid>
      </div>
    </>
  );
}
