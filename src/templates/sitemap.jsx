import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const styles = makeStyles(() => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30
  },
  h2: {
    marginBottom: 20
  }
}));

export default function Sitemap({ pageContext }) {
  const classes = styles(styles);
  return (
    <>
      <Layout
        partnerCode={pageContext.partnerCode}
        navigation={pageContext.appData.navigation}
        footer={pageContext.appData.siteFooter}
        styles={pageContext.theme}
      >
        <Container maxWidth="md" className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.h2}>Sitemap</Typography>
            </Grid>
            <Grid item xs={12}>
              <ul>
                {
                  pageContext?.pages
                    .map((page) => (
                      <li><Link key={page.path} to={`../${page.path}`}>{page.label}</Link></li>
                    ))
                }
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
