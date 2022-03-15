import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import { Container, Typography, Button } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import clsx from 'clsx';
import { myStyles, imageStyles } from './styles';
import ThemeContext from '../../utils/theme-context';
import { themeStyles } from '../../styles';

export default function ImageWithText({ data }) {
  const filename = data?.image?.file?.url?.substring(data?.image?.file?.url?.lastIndexOf('/') + 1);
  const imageClasses = imageStyles(data);
  const partnerTheme = useContext(ThemeContext);
  const classes = myStyles(partnerTheme);
  const globalthemClasses = themeStyles(partnerTheme);
  return (
    <>
      <Container className={classes.newContainer}>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs>
              <Paper elevation={0} className={classes.paper}>
                {data.image && (
                  <div className={imageClasses.imageWrapper}>
                    <img
                      className={classes.mainImage}
                      src={data.image.file.url}
                      alt={filename}
                    />
                  </div>
                )}
                {data.titleText && (
                <Typography variant="h2" className={imageClasses.titleHeading}>
                  {data.titleText}
                </Typography>
                )}
                {data.titleUnderline && (
                  <div className={imageClasses.underline}>
                    <hr className={clsx(globalthemClasses.progressBarColor, classes.hr)} />
                  </div>
                )}
                {data?.subText?.raw && (
                  <Typography variant="body2" className={clsx(classes.p, imageClasses.p)}>
                    {documentToReactComponents(JSON.parse(data.subText.raw))}
                  </Typography>
                )}
              </Paper>
            </Grid>
            {data.isCtaButtonEnabled && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Link to="/customer-info" tabindex="-1">
                <Button
                  variant="contained"
                  className={clsx(globalthemClasses.button)}
                >
                  {data.button.labelForPrimaryCta}
                </Button>
              </Link>
            </Grid>
            )}
          </Grid>
        </div>
      </Container>
    </>
  );
}
