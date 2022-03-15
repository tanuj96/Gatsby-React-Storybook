/* eslint-disable func-names */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import { LeadFormContextDispatch } from '../../utils/leadForm-context';
import { myStyles } from './styles';
import { useFormControls } from './customer-info-form-validation';
import { themeStyles } from '../../styles';
import '../../styles.scss';
import ThemeContext from '../../utils/theme-context';

// eslint-disable-next-line no-unused-vars
export default function CustomerInfo({ data, context }) {
  const classes = myStyles();
  const TextOptInLink = ({ children }) => (<a href={(JSON.parse(context.txtOptInDisclaimer.raw)).content[0].content[1].data.uri} className={classes.consentText} target="_blank" rel="noreferrer">{children}</a>);
  const ConsentLink = ({ children }) => (children[0] === 'Terms of Use' ? <a href={(JSON.parse(context.legalDisclaimer.raw)).content[0].content[1].data.uri} className={classes.consentText} target="_blank" rel="noreferrer">{children}</a> : <a href={(JSON.parse(context.legalDisclaimer.raw)).content[0].content[3].data.uri} className={classes.consentText} target="_blank" rel="noreferrer">{children}</a>);

  const options1 = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <ConsentLink>{children}</ConsentLink>
    }
  };

  const options2 = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <TextOptInLink>{children}</TextOptInLink>
    }
  };

  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const [textMeVisible, setTextMeVisible] = useState(false);
  const {
    handleInputValue,
    formIsValid,
    errors,
    validate
  } = useFormControls();

  // eslint-disable-next-line no-unused-vars
  const dispatch = useContext(LeadFormContextDispatch);

  const [customerInfo, setcustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    phonetype: '',
    textYou: false,
    memberNumber: ''
  });

  const setToggle = (event, value) => {
    event.target.value = value;
    event.target.name = 'phonetype';
    setTextMeVisible(value === 'Mobile' ? true : false);
    setcustomerInfo({ ...customerInfo, phonetype: value });
    handleInputValue(event);
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      localStorage.removeItem('lead');
    };

    const getLead = JSON.parse(localStorage.getItem('lead'));
    // setLead(getLead || {});
    if (getLead?.customerInfo?.phonetype === 'Mobile') {
      setTextMeVisible(true);
    }
    if (getLead?.customerInfo) {
      setcustomerInfo({ ...customerInfo, ...(getLead?.customerInfo || {}) });
      validate(getLead?.customerInfo);
    }
  }, []);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const previousScreen = () => {
    const lead = JSON.parse(localStorage.getItem('lead'));
    dispatch({
      type: 'CUSTOMER_INFO',
      value: { ...lead, customerInfo }
    });
    navigate('/service-selection');
  };

  const saveCustomerInfo = () => {
    const lead = JSON.parse(localStorage.getItem('lead'));
    dispatch({
      type: 'CUSTOMER_INFO',
      value: { ...lead, customerInfo }
    });
  };

  const submitAnswer = () => {
    const lead = JSON.parse(localStorage.getItem('lead'));
    if (context.flowOrder === 'Buying Only') {
      dispatch({
        type: 'SERVICE_TYPE',
        value: { ...lead, operationType: 'BUY' }
      });
      saveCustomerInfo();
    } else if (context.flowOrder === 'Selling Only') {
      dispatch({
        type: 'SERVICE_TYPE',
        value: { ...lead, operationType: 'SELL' }
      });
      saveCustomerInfo();
    } else {
      saveCustomerInfo();
    }
    if (context.flowOrder === 'Buying, Selling') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/buy-location');
      } else if (lead.operationType === 'BUY') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL') {
        navigate('/sell-location');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/sell-location');
      } else if (lead.operationType === 'BUY') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL') {
        navigate('/sell-location');
      }
    } else if (context.flowOrder === 'Buying Only') {
      navigate('/buy-location');
    } else if (context.flowOrder === 'Selling Only') {
      navigate('/sell-location');
    }
    // navigate('/buy-location');
  };

  const closeModal = () => {
    navigate('/');
    localStorage.removeItem('lead');
  };

  return (
    <Container className={classes.root}>
      <Grid container className="whitebg">
        <div className={classes.leadFormHelperBar}>
          <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Typography variant="h2" component="h2" className={classes.internalContent}>
              {context.screenTitle}
            </Typography>
            <Typography className={classes.internalSubText}>
              {context.screenSubTitle}
            </Typography>
          </Paper>
        </Grid>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <TextField
                  label="First Name "
                  variant="outlined"
                  className={classes.inputField}
                  value={customerInfo.firstName}
                  required
                  name="firstName"
                  inputProps={{ maxlength: 50 }}
                  onKeyUp={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.firstName && { error: true, helperText: errors.firstName })}
                  onChange={(event) => setcustomerInfo({ ...customerInfo, firstName: event.target.value })}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <TextField
                  label="Last Name "
                  variant="outlined"
                  value={customerInfo.lastName}
                  required
                  onKeyUp={handleInputValue}
                  onBlur={handleInputValue}
                  name="lastName"
                  inputProps={{ maxlength: 50 }}
                  {...(errors.lastName && { error: true, helperText: errors.lastName })}
                  onChange={(event) => setcustomerInfo({ ...customerInfo, lastName: event.target.value })}
                  className={classes.inputField}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <TextField
                  label="Email "
                  variant="outlined"
                  value={customerInfo.email}
                  required
                  onKeyUp={handleInputValue}
                  onBlur={handleInputValue}
                  name="email"
                  {...(errors.email && { error: true, helperText: errors.email })}
                  onChange={(event) => setcustomerInfo({ ...customerInfo, email: event.target.value })}
                  className={classes.inputField}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper className={classes.paper}>
                <TextField
                  label="Primary Number "
                  variant="outlined"
                  value={customerInfo.phoneNumber}
                  required
                  onKeyUp={handleInputValue}
                  onBlur={handleInputValue}
                  name="phoneNumber"
                  inputProps={{ maxlength: 10 }}
                  {...(errors.phoneNumber && { error: true, helperText: errors.phoneNumber })}
                  onChange={(event) => setcustomerInfo(
                    { ...customerInfo, phoneNumber: event.target.value }
                  )}
                  className={classes.inputField}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper className={classes.paper}>
                <ToggleButtonGroup
                  value={customerInfo.phonetype}
                  exclusive={true}
                  onChange={setToggle}
                  aria-label="Toggle Button Group"
                  name="phonetype"
                  {...(errors.phonetype && { error: true, helperText: errors.phonetype })}
                >
                  <ToggleButton
                    value="Mobile"
                    aria-label="Mobile"
                    className={classes.toggleButton}
                    classes={{ selected: classes.toggleSelected }}
                  >
                    Mobile
                  </ToggleButton>
                  <ToggleButton
                    value="Home"
                    aria-label="Home"
                    className={classes.toggleButton}
                    classes={{ selected: classes.toggleSelected }}
                  >
                    Home
                  </ToggleButton>
                </ToggleButtonGroup>
              </Paper>
            </Grid>
            {context.isMemberField && (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <TextField
                    label={context.memberFieldLbl}
                    variant="outlined"
                    value={customerInfo.memberNumber}
                    onKeyUp={handleInputValue}
                    name="memberNumber"
                    onChange={(event) => setcustomerInfo({ ...customerInfo, memberNumber: event.target.value })}
                    className={classes.inputField}
                  />
                </Paper>
              </Grid>
            )}
            {textMeVisible
              && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Paper className={classes.paper}>
                    <Typography className={classes.optText}>
                      <Checkbox
                        color="default"
                        checked={customerInfo.textYou}
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        onChange={() => setcustomerInfo({ ...customerInfo, textYou: !customerInfo.textYou })}
                      />
                      {documentToReactComponents((JSON.parse(context.txtOptInDisclaimer.raw)), options2)}
                    </Typography>
                  </Paper>
                </Grid>
              )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={clsx(classes.paper, classes.typoAlign)}>
                {(context.flowOrder === 'Buying, Selling' || context.flowOrder === 'Selling, Buying')
                  && (
                    <Button onClick={previousScreen} size="large" className={clsx(globalThemeCss.button, classes.prevButton)} variant="contained">{context.prevButtonLabel}</Button>
                  )}
                <Button onClick={submitAnswer} disabled={!formIsValid(customerInfo)} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained">{context.nextButtonLabel}</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.consentText}>
                  {documentToReactComponents((JSON.parse(context.legalDisclaimer.raw)), options1)}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
