/* eslint-disable max-len */
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Header from '../header';
import Footer from '../footer';
import ThemeContext from '../../utils/theme-context';
import { customeTheme } from '../../styles';
import '../../styles.scss';

export default function Layout({
  navigation, footer, children, styles, metadata, contactFormDetails, logout, ast, siteType, searchEnabled, astEnabled
}) {
  const [partnerTheme] = useState(styles);
  return (
    <>
      { styles.typography.googleFontHeading && styles.typography.googleFontBody
      && (
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href={`https://fonts.googleapis.com/css2?family=${styles.typography?.googleFontHeading}&family=${styles.typography?.googleFontBody}&display=swap`} rel="stylesheet" />
      </Helmet>
      )}
      <ThemeContext.Provider value={partnerTheme}>
        <ThemeProvider theme={customeTheme(partnerTheme)}>
          <Header navigation={navigation} buttonStyle={styles.buttonStyle.buttonBackgroundColor} siteMetadata={metadata} contactForm={contactFormDetails} logout={logout} astData={ast} siteType={siteType} isSearchEnabled={searchEnabled} isAst={astEnabled} />
          <main>
            <Container maxWidth="xl" style={{ padding: '0' }}>
              {children}
            </Container>
          </main>
          <div id="consent_blackbar" className="cookie-consent"> </div>
          <Footer footer={footer} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
