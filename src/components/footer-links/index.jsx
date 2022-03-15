/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { footerStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

export default function FooterLinks({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = footerStyles(partnerTheme);
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            className={classes.footerLinks}
          >
            {data.links.map((link) => {
              const isNewTab = link.link.openInANewTab ? 'blank' : '';
              return (
                <Grid item key={link.link.id}>
                  <Link to={!link.link.openInANewTab ? `/${link.link.referenceToPage?.pageName}` : `${link.link.url}`} target={isNewTab} className={classes.links}>{link.label}</Link>
                </Grid>
              );
            })}
            <span id="teconsent" className={classes.cookieLink} />
            <Helmet>
              <script async="async" src="//consent.trustarc.com/notice?domain=realogyleadsgroup.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1&privacypolicylink=https%3A%2F%2Fapfmrealestatebenefits.com%2Fprivacy" crossOrigin />
            </Helmet>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
