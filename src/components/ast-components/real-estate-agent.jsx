/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { Link } from 'gatsby';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Typography } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { AstContextDispatch } from '../../utils/ast-context';
import { themeStyles } from '../../styles';
import { myStyles } from '../signuppopup/styles';
import Helper from './helper';
import ThankYou from './thank-you';
import ThemeContext from '../../utils/theme-context';

export default function RealEstateAgent({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(AstContextDispatch);
  const [helper, setHelper] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const handlerClick = (newLead) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: newLead
    };

    fetch(
      `${process.env.GATSBY_SUBMIT_LEAD}`,
      requestOptions
    ).then((response) => {
      setShowThanks(true);
    });
  };

  const handleYes = () => {
    dispatch({ type: 'REAL_ESTATE', value: { ...lead, hasAgent: true } });
    const newLead = JSON.parse(localStorage.getItem('lead'));
    handlerClick(newLead);
  };

  const handleNo = () => {
    dispatch({ type: 'REAL_ESTATE', value: { ...lead, hasAgent: false } });
    const newLead = JSON.parse(localStorage.getItem('lead'));
    handlerClick(newLead);
  };

  const helperShow = () => {
    setHelper(true);
  };

  const helperHide = () => {
    setHelper(false);
  };

  return (
    <>
      {helper && !showThanks && (
        <>
          <Helper helperData={data} helperSwitch={helperHide} />
        </>
      )}
      {!helper && !showThanks && (
        <>
          <div className={classes.root}>
            <div className={classes.prev}>
              <Link
                to={(lead.operationType === 'BUYSELL' ? `/signup/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}` : `/signup/${lead?.operationType?.toLowerCase().replace(/\s/g, '')}/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}`)}
              >
                <div className={classes.backPage}>
                  <ArrowBackIcon />
                  {' '}
                  Previous
                </div>
              </Link>
              <div className={classes.backPage}>
                <Typography variant="caption">
                  <Button onClick={helperShow}>
                    <ContactSupportIcon />
                    Have Questions
                  </Button>
                </Typography>
              </div>
              <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h1" className={classes.pagestitle}>
              {data.question.internal.content}
            </Typography>
            <Grid
              spacing={3}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.yesNo}
            >
              <Grid item>
                <Button
                  onClick={handleYes}
                  variant="contained"
                  className={clsx(globalThemeCss.button, classes.nextButton)}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleNo}
                  variant="contained"
                  className={clsx(globalThemeCss.button, classes.nextButton)}
                >
                  No
                </Button>
              </Grid>
            </Grid>
          </div>
        </>
      )}
      { showThanks && (
        <ThankYou thanksData={context.thankYouScreen} />
      )}
    </>
  );
}
