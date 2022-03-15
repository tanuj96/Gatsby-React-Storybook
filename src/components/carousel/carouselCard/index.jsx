import React, { useContext } from 'react';
import {
  Paper, Button, useMediaQuery, createTheme, Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { themeStyles } from '../../../styles';
import { useStyles } from '../styles';
import ThemeContext from '../../../utils/theme-context';

const CarouselCard = ({ item }) => {
  const partnerTheme = useContext(ThemeContext);
  const theme = createTheme({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const globalthemClasses = themeStyles(partnerTheme);
  return (
    <Paper tabIndex="0">
      {!isMobile ? (
        <div
          style={{
            backgroundImage: `url(${item.url})`,
            justifyContent: `${item.align}`
          }}
          className={classes.imageAlignment}
        >
          <div
            className={
              item.cardStyleRight
                ? `${classes.cardStyleRight}`
                : `${classes.cardStyle}`
            }
          >
            <Typography className={classes.name}>{item.eyebrowText}</Typography>
            <Typography className={classes.heading}>{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            { item.textData.primaryCallToAction
              && item.textData.primaryCallToAction.displayPrimaryCta && (
              <Button
                variant="contained"
                color={item.color}
                size={item.size}
                className={globalthemClasses.button}
              >
                {item.textData.primaryCallToAction.labelForPrimaryCta}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <section className={classes.noHeaderContentArea}>
          <img
            src={item.url}
            alt="img"
            className={classes.mobileImageAlignment}
          />

          <div
            className={
              item.cardStyleRight
                ? `${classes.cardStyleRight}`
                : `${classes.cardStyle}`
            }
          >
            <Typography className={classes.name}>{item.eyebrowText}</Typography>
            <Typography className={classes.heading}>{item.name}</Typography>
            <Typography variant="body2" className={classes.description}>{item.description}</Typography>
            <Button
              variant="contained"
              color={item.color}
              size={item.size}
              className={clsx(globalthemClasses.button, classes.carouselBtn)}
            >
              SignIn
            </Button>
          </div>
        </section>
      )}
    </Paper>
  );
};

export default CarouselCard;
