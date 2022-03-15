/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { myStyles } from './styles';
import { themeStyles } from '../../styles';
import { LeadFormContextDispatch } from '../../utils/leadForm-context';
import ThemeContext from '../../utils/theme-context';

export default function BuySell({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(LeadFormContextDispatch);
  const [lead, setLead] = useState({});
  const [isActive, setActive] = useState(false);
  const [isEnabled, SetIsEnabled] = useState(false);
  let active;

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead || {});
    if (getLead) {
      if (getLead?.operationType == "BUYSELL") {
        setActive(true);
        SetIsEnabled(true);
      }
      if (getLead?.operationType == "SELL") {
        SetIsEnabled(true);
      }
      if (getLead?.operationType == "BUY") {
        setActive(true);
      }
    }
  }, []);

  const selectTypeBuying = () => {
    setActive(!isActive);
  };

  const selectTypeSelling = () => {
    SetIsEnabled(!isEnabled);
  };

  const submitAnswer = () => {
    dispatch({ type: 'SERVICE_TYPE', value: { ...lead, operationType: (isActive && isEnabled ? "BUYSELL" : isActive ? "BUY" : "SELL") } });
    navigate('/customer-info');
  };

  const closeModal = () => {
    navigate('/');
    localStorage.removeItem('lead');
  };

  return (
    lead
    && (
    <Container className={classes.root}>
      <Grid container>
        <div className={classes.leadFormHelperBar}>
          <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography variant="h1" className={classes.pagestitle}>{context.screenTitle}</Typography>
            <Typography className={classes.internalSubText}>{context.screenSubTitle}</Typography>
          </Paper>
        </Grid>
        {context.flowOrder === 'Buying, Selling' ? (
          <Grid container spacing={3} className={classes.gridFix}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={isActive ? clsx(classes.cardOnSelect) : clsx(classes.singIncard)} onClick={selectTypeBuying}>
                <CardContent className={classes.cardContent}>
                  <img className={classes.cardImg} src={`https:${context.buyIcon.file.url}`} alt="card images" />
                  <Typography variant="h4" className={classes.cardText}>{context.buyText}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={isEnabled ? clsx(classes.cardOnSelect) : clsx(classes.singIncard)} onClick={selectTypeSelling}>
                <CardContent className={classes.cardContent}>
                  <img className={classes.cardImg} src={`https:${context.sellIcon.file.url}`} alt="card images" />
                  <Typography variant="h4" className={classes.cardText}>{context.sellText}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3} className={classes.gridFix}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={isEnabled ? clsx(classes.cardOnSelect) : clsx(classes.singIncard)} onClick={selectTypeSelling}>
                <CardContent className={classes.cardContent}>
                  <img className={classes.cardImg} src={`https:${context.sellIcon.file.url}`} alt="card images" />
                  <Typography variant="h4" className={classes.cardText}>{context.sellText}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className={isActive ? clsx(classes.cardOnSelect) : clsx(classes.singIncard)} onClick={selectTypeBuying}>
                <CardContent className={classes.cardContent}>
                  <img className={classes.cardImg} src={`https:${context.buyIcon.file.url}`} alt="card images" />
                  <Typography variant="h4" className={classes.cardText}>{context.buyText}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={clsx(classes.paper, classes.typoAlign)}>
            <Button onClick={submitAnswer} disabled={!(isActive || isEnabled)} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained">{context.nextButtonLabel}</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.consentText}>
              {documentToReactComponents(JSON.parse(context.legalDisclaimer.raw))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    )
  );
}
