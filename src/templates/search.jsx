/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useLunr } from 'react-lunr';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Layout from '../components/layout';
import lunrData from '../../static/search-index.json';
import { searchResultStyles } from './styles';

export default function Search({ location, pageContext }) {
  const classes = searchResultStyles();
  const [query] = useState(new URLSearchParams(location.search).get('s') || '');
  const results = useLunr(query.toLowerCase(), lunrData.index, lunrData.store);
  return (

    <Layout
      partnerCode={pageContext.partnerCode}
      navigation={pageContext.appData.navigation}
      footer={pageContext.appData.siteFooter}
      styles={pageContext.theme}
    >
      <Container fixed>
        <Grid container alignContent="center">
          <Grid
            container
            direction="row"
            justifyContent="flex-sart"
            alignItems="center"
          >
            <Typography variant="h3" className={classes.searchResult}>
              Search Result
              {' '}
              <span className={classes.query}>
                "
                {query}
                "
              </span>
            </Typography>
          </Grid>
          <List className={classes.root}>
            {
            results.map((result) => (
              <>
                <Link to={result.slug}>
                  <ListItem button>
                    <ListItemText
                      className={classes.searchText}
                      primary={result.title}
                      secondary={result.body}
                    />
                  </ListItem>
                </Link>
                <Divider variant="middle" className={classes.dividerMargin} />
              </>
            ))
          }
          </List>
        </Grid>
      </Container>
    </Layout>

  );
}
