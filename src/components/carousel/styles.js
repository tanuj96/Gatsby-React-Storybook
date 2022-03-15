/* eslint-disable import/prefer-default-export */
/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  imageAlignment: () => ({
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    padding: '70px'
  }),
  cardStyleRight: () => ({
    [theme.breakpoints.down('sm')]: {
      width: ' 100%'
    },
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    zIndex: '10',
    transition: 'opacity 1s cubic-bezier(0.08, 0.83, 0.36, 0.98) 0.6s',
    width: ' 320px',
    minHeight: '360px',
    textAlign: 'right',
    boxSizing: 'border-box'
  }),
  imageAlignment: () => ({
    height: '450px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 100px 0px 100px'
  }),
  mobileImageAlignment: () => ({
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  }),
  cardStyle: () => ({
    [theme.breakpoints.down('sm')]: {
      width: ' 100%'
    },
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    zIndex: '10',
    transition: 'opacity 1s cubic-bezier(0.08, 0.83, 0.36, 0.98) 0.6s',
    width: ' 320px',
    minHeight: '360px',
    boxSizing: 'border-box',
    float: 'left'
  }),

  name: () => ({
    color: '#6B6B6B',
    marginTop: '10px'
  }),
  description: () => ({
    color: 'rgb(85, 85, 85)'
  }),
  carouselBtn: () => ({
    top: 'calc(14% - 20px) !important'
  }),
  heading: () => ({
    width: ' 100%',
    padding: '0px',
    margin: '0px',
    fontSize: '26px',
    fontWeight: '300',
    lineHeight: '1.3'
  })
}));
