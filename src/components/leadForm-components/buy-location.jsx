/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
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

// eslint-disable-next-line no-unused-vars
export default function BuyLocation({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(LeadFormContextDispatch);
  const leadFormStore = useContext(LeadFormContext);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [lead, setLead] = useState('');
  const compBasicModalLeadForm = useState(context.appData.compBasicModalLeadForm);

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead || {});
    setNextDisabled(!getLead?.buyingLocation?.selectedOption);
  }, []);

  const setPlace = (location) => {
    if (typeof location === 'object' && Object.keys(location).length > 0) {
      dispatch({
        type: 'BUY_LOCATION',
        value: {
          ...lead,
          buyingLocation: {
            ...location
          }
        }
      });
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  };

  const previousScreen = () => {
    if (context.flowOrder === 'Buying, Selling') {
      if (lead.operationType === 'BUYSELL' || lead.operationType === 'BUY') {
        navigate('/customer-info');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/sell-location');
      } else if (lead.operationType === 'BUY') {
        navigate('/customer-info');
      }
    } else if (context.flowOrder === 'Buying Only') {
      navigate('/customer-info');
    }
    // navigate('/customer-info');
  };

  const submitAnswer = () => {
    if (context.flowOrder === 'Buying, Selling') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/sell-location');
      } else if (lead.operationType === 'BUY' && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
        navigate('/custom-question');
      } else {
        navigate('/thankyou');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if ((lead.operationType === 'BUYSELL' || lead.operationType === 'BUY') && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
        navigate('/custom-question');
      } else {
        navigate('/thankyou');
      }
    } else if (context.flowOrder === 'Buying Only' && compBasicModalLeadForm && compBasicModalLeadForm.additionalInfoScreen && compBasicModalLeadForm.additionalInfoScreen.additionalQuestions) {
      navigate('/custom-question');
    } else {
      navigate('/thankyou');
    }
    // navigate('/sell-location');
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
              <Typography variant="h1" className={classes.pagestitle}>{context.screenTitle}</Typography>
            </Paper>
          </Grid>
          <Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '25vh' }}>
            <Grid item xs={12} lg={6} md={6} sm={8}>
              <Map fromBuy showMap={false} value={lead?.buyingLocation?.selectedOption || ''} place={setPlace} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={clsx(classes.paper, classes.typoAlign)}>
              <Button onClick={previousScreen} size="large" className={clsx(globalThemeCss.button, classes.prevButton)} variant="contained">{context.prevButtonLabel}</Button>
              <Button onClick={submitAnswer} disabled={nextDisabled} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained">{context.nextButtonLabel}</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    ));
}
