/* eslint-disable brace-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { themeStyles } from '../../styles';
import { myStyles } from './styles';
import LeadFormLoading from './leadFormLoading';
import { constructPayloadForSubmitLead } from './submitForm';
import ThemeContext from '../../utils/theme-context';

const endpoint = 'https://0qk75onpxb.execute-api.us-west-2.amazonaws.com/v1';

export default function ThankYou({ context, ...others }) {
  // const endpoint = process.env.GATSBY_LEAD_FORM_SUBMIT_URL;
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  // const themeClass = themeStyles();
  const [loading, setLoading] = useState(true);

  const submitAPI = async () => {
    const lead = JSON.parse(localStorage.getItem('lead'));
    const data = constructPayloadForSubmitLead(lead, others);
    try {
      await axios.post(endpoint, data, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      setLoading(false);
    }
    catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    loading && submitAPI();
  }, [loading]);

  const closeModal = () => {
    navigate('/');
    localStorage.removeItem('lead');
  };

  return (
    <>
      {loading
      && <LeadFormLoading />}
      {!loading && (
        <Container className={classes.root}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <div className={classes.leadFormHelperBar}>
              <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
                <CloseIcon />
              </IconButton>
            </div>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Typography variant="h2">{documentToReactComponents(JSON.parse(context.screenTitle.raw))}</Typography>
                {/* <Typography variant="h2">Thank you for connecting with us!</Typography> */}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={6}>
              <Paper className={classes.paper}>
                <Typography variant="h4">{documentToReactComponents(JSON.parse(context.thxBodyText.raw))}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Button onClick={closeModal} variant="contained" className={clsx(globalThemeCss.button, classes.nextButton)}>{context.thxCloseButtonLabel}</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
