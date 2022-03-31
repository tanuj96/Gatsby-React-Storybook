/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useMediaQuery, createTheme } from '@material-ui/core';
import CarouselCard from './carouselCard';
import '../../styles.scss';
import ThemeContext from '../../utils/theme-context';
import { useStyles } from './styles';

function CarouselImage({ data }) {
  const { frames } = data;
  const partnerTheme = useContext(ThemeContext);
  const classes = useStyles(partnerTheme);
  const items = [];
  frames.map((frame) => items.push({
    name: frame.heading,
    eyebrowText: frame.eyebrowText,
    description: documentToReactComponents(JSON.parse(frame.bodyText.raw)),
    url: `https:${frame.image.file.url}`,
    height: '400px',
    size: 'small',
    imageAlignment: 'imageAlignmentFlextStart',
    align: frame.overlayAlignment === 'Left align' ? 'flex-start' : 'flex-end',
    color: 'secondary',
    textData: frame,
    imageAltText: frame.image.description
  }));
  const theme = createTheme({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="carousel-main">
      {!isMobile ? (
        <Carousel
          indicators="false"
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: partnerTheme.buttonStyle.buttonBackgroundColor,
              borderRadius: '4px'
            }
          }}
          navButtonsAlwaysVisible
        >
          {items.map((item, i) => (
            <CarouselCard key={i} item={item} tabIndex="0" />
          ))}
        </Carousel>
      ) : (
        <Carousel
          className="buttonPosition"
          navButtonsProps={{
            style: {
              top: 'calc(10% - 20px) !important',
              bottom: 'unset !important',
              backgroundColor: partnerTheme.buttonStyle.buttonBackgroundColor,
              borderRadius: '3px'
            }
          }}
          navButtonsAlwaysVisible
          navButtonsWrapperProps={{
            style: {
              bottom: 'unset !important',
              top: 'calc(10% - 20px) !important'
            }
          }}
        >
          {items.map((item, i) => (
            <CarouselCard key={i} item={item} />
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default CarouselImage;
