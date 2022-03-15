/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import CountUp from 'react-countup';
import IconButton from '@material-ui/core/IconButton';
import { myStyles } from '../signuppopup/styles';
import { themeStyles } from '../../styles';
import { AstContext, AstContextDispatch } from '../../utils/ast-context';
import Helper from './helper';
import RewardDisclaimer from './reward-diaclaimer';
import ThemeContext from '../../utils/theme-context';

export default function PriveValue({ data, context }) {
  const classes = myStyles();
  const [currency] = React.useState('EUR');
  const astContext = useContext(AstContext);
  const dispatch = useContext(AstContextDispatch);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [cashbackVisible, setCashbackVisible] = useState(false);
  const [helper, setHelper] = useState(false);
  const [disclaimer, setDisclaimer] = useState(false);
  const [cashback, setCashback] = useState(3500);
  const [minIndex, setMinIndex] = useState(0);
  const [nextDisable, setNextDisable] = useState(true);
  const [rewardTable] = useState(context.rewardTable.childrenContentfulRewardTableRewardTiersJsonNode);
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const changeCashback = (value) => {
    if (maxValue !== 0 && minValue !== 0) {
      for (let i = 0; i < rewardTable.length; i++) {
        if (minValue == rewardTable[i].min) {
          setMinIndex(i);
          break;
        }
      }
      rewardTable.slice(minIndex, rewardTable.length).map((point) => {
        if (value == point.max) {
          setCashback(point.reward);
          setCashbackVisible(true);
          setNextDisable(false);
        }
      });
    }
  };

  const handlerClick = (path) => {
    dispatch({ type: 'AMOUNT_CHANGE', value: { ...lead, buyMaxPrice: maxValue, buyMinPrice: minValue } });
    navigate(path);
  };

  const helperShow = () => {
    setHelper(true);
  };

  const helperHide = () => {
    setHelper(false);
  };

  const showDisclaimer = () => {
    setDisclaimer(true);
  };

  const hideDisclaimer = () => {
    setDisclaimer(false);
  };

  const updateMinValue = (value) => {
    setMinValue(value);
  };

  const updateMaxValue = (value) => {
    setMaxValue(value);
    changeCashback(value);
  };

  return (
    <>
      {(helper && !disclaimer) && (
      <>
        <Helper helperData={data} helperSwitch={helperHide} />
      </>
      )}
      {(!helper && disclaimer) && (
      <>
        <RewardDisclaimer disclaimerData={context.rewardDisclaimerText} disclaimerSwitch={hideDisclaimer} />
      </>
      )}
      {(!helper && !disclaimer)
    && (
    <>
      <div className={classes.root}>
        <div className={classes.prev}>
          <Link to={`/signup/${context.previous.screenCategory.toLowerCase().replace(/\s/g, '')}/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}`}>
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
        <Typography variant="h1" className={classes.pagestitle}>{data.question.internal.content}</Typography>
        <Container maxWidth="sm" className={classes.amount}>
          <Grid container spacing={3}>
            <Grid item lg={3}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="minimum"
                value={minValue}
                onChange={(event) => updateMinValue(event.target.value)}
                SelectProps={{
                  native: true
                }}
                variant="outlined"
              >
                {context.rewardTable.childrenContentfulRewardTableRewardTiersJsonNode.map((option) => (
                  <option key={option.min} value={option.min}>
                    $
                    {option.min}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="maximum"
                value={maxValue}
                onChange={(event) => updateMaxValue(event.target.value)}
                SelectProps={{
                  native: true
                }}
                variant="outlined"
              >
                {context.rewardTable.childrenContentfulRewardTableRewardTiersJsonNode.map((option) => (
                  <option key={option.max} value={option.max}>
                    $
                    {option.max}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
          {cashbackVisible
        && (
        <div className={classes.reward}>
          <Typography>
            Based on the price you provided, your reward will be up to
          </Typography>
          <Typography variant="h3">
            $
            <CountUp end={cashback} duration={2} />
          </Typography>
        </div>
        )}
        </Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button disabled={nextDisable} onClick={() => handlerClick(`/signup/${lead?.operationType?.toLowerCase().replace(/\s/g, '')}/${context.next.screenType.toLowerCase().replace(/\s/g, '')}`)} variant="contained" className={!nextDisable && clsx(globalThemeCss.button, classes.nextButton)}>
            Next
          </Button>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={showDisclaimer}>Reward Disclaimer</Button>
        </Grid>
      </div>

    </>
    )}
    </>
  );
}
