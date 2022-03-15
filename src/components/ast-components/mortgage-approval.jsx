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
import { themeStyles } from '../../styles';
import { myStyles } from '../signuppopup/styles';
import { AstContextDispatch } from '../../utils/ast-context';
import Helper from './helper';
import ThemeContext from '../../utils/theme-context';

export default function MortgageApproval({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(AstContextDispatch);
  const [helper, setHelper] = useState(false);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const handleClickYes = (path) => {
    dispatch({ type: 'SET_MORTGAGE', value: { ...lead, isPreapproved: true } });
    navigate(path);
  };

  const handleClickNo = (path) => {
    dispatch({
      type: 'SET_MORTGAGE',
      value: { ...lead, isPreapproved: false }
    });
    navigate(path);
  };

  const helperShow = () => {
    setHelper(true);
  };

  const helperHide = () => {
    setHelper(false);
  };

  return (
    <>
      {helper && (
        <>
          <Helper helperData={data} helperSwitch={helperHide} />
        </>
      )}
      {!helper && (
        <>
          <div className={classes.root}>
            <div className={classes.prev}>
              <Link
                to={`/signup/${context.previous.screenCategory
                  .toLowerCase()
                  .replace(/\s/g, '')}/${context.previous.screenType
                  .toLowerCase()
                  .replace(/\s/g, '')}`}
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
                  onClick={() => handleClickYes(
                    (lead.operationType === 'BUYSELL' ? `/signup/${context.next.screenType.toLowerCase().replace(/\s/g, '')}` : `/signup/${lead?.operationType?.toLowerCase().replace(/\s/g, '')}/${context.next.screenType.toLowerCase().replace(/\s/g, '')}`)
                  )}
                  variant="contained"
                  className={clsx(globalThemeCss.button, classes.nextButton)}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => handleClickNo(
                    (lead.operationType === 'BUYSELL' ? `/signup/${context.next.screenType.toLowerCase().replace(/\s/g, '')}` : `/signup/${lead?.operationType?.toLowerCase().replace(/\s/g, '')}/${context.next.screenType.toLowerCase().replace(/\s/g, '')}`)
                  )}
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
    </>
  );
}
