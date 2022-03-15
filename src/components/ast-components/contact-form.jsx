/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import axios from 'axios';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { navigate } from 'gatsby-link';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { AstContextDispatch } from '../../utils/ast-context';
import { myStyles } from '../signuppopup/styles';
import { useFormControls } from './form-validation';
import Helper from './helper';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function ConatctForm({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const [textMeVisible, setTextMeVisible] = useState(true);
  const [alignment, setAlignment] = React.useState('left');
  const [helper, setHelper] = useState(false);
  const {
    handleInputValue,
    formIsValid,
    errors
  } = useFormControls();

  const dispatch = useContext(AstContextDispatch);

  const [customerInfo, setcustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    phonetype: 'type-phone-mobile',
    textYou: false
  });

  const setToggle = (type) => {
    if (type === 'Mobile') {
      setcustomerInfo({ ...customerInfo, phonetype: 'type-phone-mobile', textYou: true });
      setTextMeVisible(true);
    } else {
      setcustomerInfo({ ...customerInfo, phonetype: 'type-phone-home', textYou: false });
      setTextMeVisible(false);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const contactInfoStatus = 'incomplete';

  const postOrUpdateContactInfo = async (values, status, path) => {
    const contactInfo = {
      status,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneType: values.phonetype,
      primaryPhoneNo: values.phoneNumber,
      textOptIn: values.textYou,
      clientNumber: context.metadata.clientNumber,
      clientName: context.metadata.leadSource
    };

    // eslint-disable-next-line no-useless-catch
    try {
      const headers = {};
      const apiCall = await axios.post(`${process.env.GATSBY_AST_CUSTOMER_URL}`, contactInfo, headers, true);
      const contactLead = {
        uEmail: values.email,
        uFname: values.firstName,
        uLname: values.lastName,
        uMobileClient: false,
        uMobilePhone: true,
        uPhone: values.phoneNumber,
        uCanText: values.textYou,
        metadata: context.metadata
      };
      dispatch({ type: 'CUSTOMER_CREATE', value: contactLead });
      navigate(path);
      return apiCall.data;
    } catch (err) {
      throw (err);
    }
  };

  const handlerClick = async (path) => {
    try {
      const response = await postOrUpdateContactInfo(customerInfo, contactInfoStatus, path);
      if (response && response.contactId) {
        customerInfo.contactId = response.contactId;
      }
    } catch (e) {
      console.log('Error while saving customer info', e);
    }
  };

  const helperShow = () => {
    setHelper(true);
  };

  const helperHide = () => {
    setHelper(false);
  };

  return (
    <Container className={classes.root}>
      {helper && (
      <>
        <Helper helperData={data} helperSwitch={helperHide} />
      </>
      )}
      {!helper
    && (
    <>
      <div className={classes.helperBar}>
        <div className={classes.backPage}>
          <Typography className={classes.helperButton} variant="caption" onClick={helperShow}>
            <Button>
              <ContactSupportIcon />
              Have Questions
            </Button>
          </Typography>
        </div>
        <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
          <CloseIcon />
        </IconButton>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.internalContent}
          >
            {data.question.internal.content}
          </Typography>
          <Typography className={classes.internalSubText}>
            {data.questionSubtext}
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
                onBlur={handleInputValue}
                name="lastName"
                {...(errors.lastName && { error: true, helperText: errors.lastName })}
                onChange={(event) => setcustomerInfo({ ...customerInfo, lastName: event.target.value })}
                className={classes.inputField}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
              <TextField
                label="Email "
                variant="outlined"
                value={customerInfo.email}
                required
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
                onBlur={handleInputValue}
                name="primaryNumber"
                {...(errors.primaryNumber && { error: true, helperText: errors.primaryNumber })}
                onChange={(event) => setcustomerInfo(
                  { ...customerInfo, phoneNumber: event.target.value }
                )}
                className={classes.inputField}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="Toggle Button Group"
              >
                <ToggleButton
                  value="type-phone-mobile"
                  aria-label="Mobile"
                  className={classes.toggleButton}
                  onClick={(event) => setToggle(event.target.innerText)}
                >
                  Mobile
                </ToggleButton>
                <ToggleButton
                  value="type-phone-home"
                  aria-label="Home"
                  className={classes.toggleButton}
                  onClick={(event) => setToggle(event.target.innerText)}
                >
                  Home
                </ToggleButton>
              </ToggleButtonGroup>
            </Paper>
          </Grid>
          {textMeVisible
          && (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.optText}>
                <Checkbox
                  color="default"
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  onChange={() => setcustomerInfo({ ...customerInfo, textYou: !customerInfo.textYou })}
                />
                {documentToReactComponents(JSON.parse(data.optInToTextingText.raw))}
              </Typography>
            </Paper>
          </Grid>
          )}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={clsx(classes.paper, classes.typoAlign)}>
              <Button className={clsx(formIsValid() && globalThemeCss.button, classes.nextButton)} disabled={!formIsValid()} onClick={() => handlerClick(context.next.screenType.toLowerCase().replace(/\s/g, ''))} variant={partnerTheme?.buttonStyle?.buttonType || 'contained'}>Next</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.consentText}>
                {documentToReactComponents(JSON.parse(context.consentToCallText.raw))}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </>
    )}
    </Container>
  );
}
