/* eslint-disable max-len */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import clsx from 'clsx';
import { myStyles } from './styles';

export default function TwoColumn({ data }) {
  const classes = myStyles();

  return (
    <Container className={classes.newContainer}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.imageGrid}>
            <Paper className={classes.paper}>
              <img
                className={classes.mainImage}
                src={`https:${data.image.file.url}`}
                alt=""
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={clsx(classes.paper, classes.paddingLeft)}>
              <Typography variant="h2">
                {data.titleText}
              </Typography>
              {data.titleUnderline && (
                <hr className={classes.hr} />
              )}
              <Typography variant="body2">{documentToReactComponents(JSON.parse(data.subText.raw))}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
