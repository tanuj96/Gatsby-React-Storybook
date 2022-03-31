/* eslint-disable max-len */
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { themeStyles } from '../../styles';
import { useStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

export default function Banner({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const bgImg = [{
    bannerImg1: data.bannerImage.file.url
  }];

  const classes = useStyles({ bgImg });
  const themeClass = themeStyles(partnerTheme);
  const navigateToPage = (path) => [
    navigate(path)
  ];

  return (
    <div className={classes.root}>
      <img src={data.bannerImage.file.url} alt={data?.bannerImage?.description} className={classes.bannerImage} />
      <div className={classes.section}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.gridWidth}
          md={12}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            { data.bannerLogo
              && <img src={data.bannerLogo.file.url} alt={data?.bannerLogo?.description} />}
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="h1">{data.title}</Typography>
            <Typography variant="subtitle1">
              {documentToReactComponents(JSON.parse(data?.bannerDescriptionRichText?.raw))}
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Button
              onClick={() => navigateToPage('/customer-info')}
              variant="contained"
              className={clsx(themeClass.button)}
            >
              {data.button.labelForPrimaryCta}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
