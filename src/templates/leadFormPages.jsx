/* eslint-disable max-len */
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import LeadFormContextProvider from '../utils/leadForm-context';
import { myStyles, BorderLinearProgress } from '../components/signuppopup/styles';
import DynamicLeadForm from '../utils/dynamic-leadForm';
import ThemeContext from '../utils/theme-context';
import { customeTheme } from '../styles';

export default function LeadFormPage({ pageContext, data, ...others }) {
  const classes = myStyles();
  const clientNumber = others?.pageResources?.json?.pageContext?.theme?.partnerMetaData?.clientNumber;
  const leadSource = others?.pageResources?.json?.pageContext?.theme?.partnerMetaData?.leadSource;
  const partnerId = others?.pageResources?.json?.pageContext?.appData?.partnerId
  console.log(leadSource, clientNumber)
  const [partnerTheme] = useState(pageContext.theme);
  return (
    <ThemeContext.Provider value={partnerTheme}>
      <ThemeProvider theme={customeTheme(partnerTheme)}>
        <Container fixed>
          <div className={classes.root}>
            <BorderLinearProgress variant="determinate" value={((pageContext.pageIndex + 1) / 6) * 100}/>
          </div>
          <LeadFormContextProvider>
            {DynamicLeadForm({ screenType: pageContext.screenType, data, context: pageContext, partnerId, clientNumber, leadSource })}
          </LeadFormContextProvider>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
