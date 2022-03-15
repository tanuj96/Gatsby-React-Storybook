/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby-link';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { myStyles } from './styles';
import Map from '../static-map/map';
import '../../styles.scss';
import { LeadFormContext, LeadFormContextDispatch } from '../../utils/leadForm-context';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function SellLocation({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(LeadFormContextDispatch);
  const leadFormStore = useContext(LeadFormContext);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [lead, setLead] = useState('');
  const [apt, setAptValue] = useState('')
  const [location, setLocation] = useState('')
  const compBasicModalLeadForm = useState(context.appData.compBasicModalLeadForm);

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead || {});
    getLead?.sellingLocation?.selectedOption && setLocation(getLead?.sellingLocation?.selectedOption)
    setAptValue(getLead?.sellingLocation?.sellApt || "");
    setNextDisabled(!getLead?.sellingLocation?.selectedOption);
  }, []);

  const onAptChange = (e) => {
    setAptValue(e?.target?.value || "")
  }

  const setPlace = (location) => {
    if (typeof location === 'object' && Object.keys(location).length > 0) {
      setLocation(location)
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  };

  const previousScreen = () => {
    const value = location === lead?.sellingLocation?.selectedOption ? lead.sellingLocation : (location || {})
    dispatch({
      type: 'SELL_LOCATION',
      value: {
        ...lead,
        sellingLocation: {
          ...value,
          sellApt: apt
        }
      }
    });
    if (context.flowOrder === 'Buying, Selling') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL') {
        navigate('/customer-info');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if (lead.operationType === 'BUYSELL' || lead.operationType === 'SELL') {
        navigate('/customer-info');
      }
    } else if (context.flowOrder === 'Selling Only') {
      navigate('/customer-info');
    }
    // navigate('/buy-location');
  };

  const submitAnswer = () => {
    const value = location === lead?.sellingLocation?.selectedOption ? lead.sellingLocation : (location || {});
    dispatch({
      type: 'SELL_LOCATION',
      value: {
        ...lead,
        sellingLocation: {
          sellApt: apt,
          ...value
        }
      }
    });
    if (context.flowOrder === 'Buying, Selling') {
      if ((lead.operationType === 'BUYSELL' || lead.operationType === 'SELL') && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
        navigate('/custom-question');
      } else {
        navigate('/thankyou');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL' && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
        navigate('/custom-question');
      } else {
        navigate('/thankyou');
      }
    } else if (context.flowOrder === 'Selling Only' && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
      navigate('/custom-question');
    } else {
      navigate('/thankyou');
    }
    // navigate('/custom-question');
  };

  const closeModal = () => {
    navigate('/');
    localStorage.removeItem('lead');
  };

  return (
    lead && (
      <Container className={classes.root}>
        <Grid container>
          <div className={classes.leadFormHelperBar}>
            <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <Typography variant="h2" className={classes.pagestitle}>{context.screenTitle}</Typography>
            </Paper>
          </Grid>
          <Grid container spacing={3} direction="row" alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Map fromSell showMap={false} place={setPlace} value={lead?.sellingLocation?.selectedOption || ''} required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2} style={{marginBottom:'auto'}} className="whitebg">
              <TextField
                label="Apt/Unit #"
                onChange={onAptChange}
                value={apt}
                variant="outlined"
                className={classes.inputField}
                name="unitNum"
                inputProps={{ maxlength: 50 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={clsx(classes.paper, classes.typoAlign)}>
                <Button onClick={previousScreen} size="large" className={clsx(globalThemeCss.button, classes.prevButton)} variant="contained">{context.prevButtonLabel}</Button>
                <Button onClick={submitAnswer} disabled={nextDisabled} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained">{context.nextButtonLabel}</Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  );
}
