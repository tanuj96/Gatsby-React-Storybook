/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinearProgress from '@material-ui/core/LinearProgress';
import { customStyles } from './styles';
import Card from './carousel-card';
import '../../styles.scss';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function CarouselPagination({ data }) {
  const filename = data.image.file.url.substring(data.image.file.url.lastIndexOf('/') + 1);
  const [quoteItems] = useState(data.quoteItems);
  const [cardValue, setCardValue] = useState(0);
  const classes = customStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalthemClasses = themeStyles(partnerTheme);
  return (
    <section className={classes.main}>

      <Grid container className={classes.carouselGrid}>
        <Grid item sm={6} md={6}>
          <div className={classes.progressBaar}>
            <LinearProgress variant="determinate" value={cardValue} classes={{ colorPrimary: globalthemClasses.progressBarSecondaryColor, barColorPrimary: globalthemClasses.progressBarColor }} />
          </div>

          <Carousel
            className={classes.carousel}
            navButtonsAlwaysVisible
            indicators={false}
            cycleNavigation={false}
            autoPlay={false}
            NextIcon={<ArrowForwardIcon />}
            PrevIcon={<ArrowBackIcon />}
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                borderRadius: 0,
                color: 'gray',
                bottom: '0px',
                zIndex: '999'

              }
            }}
            navButtonsWrapperProps={{ // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                bottom: '0',
                top: 'unset',
                height: 'auto'
                // padding:'0px 250px'
              }
            }}
          >
            {
                quoteItems.map((item, i) => <Card key={i} item={item} value={i} cardLenght={data.quoteItems.length} progress={setCardValue} />)

            }
          </Carousel>

        </Grid>
        <Grid item sm={6} md={6}>
          <img className={classes.carouselPagImage} alt={filename} src={`https:${data.image.file.url}`} />
        </Grid>
      </Grid>
    </section>
  );
}
