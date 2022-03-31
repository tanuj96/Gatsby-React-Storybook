/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const customStyles = makeStyles((theme) => ({
  main: () => ({
    flexGrow: 1,
    backgroundColor: 'rgba(240, 240, 240, 1)'
  }),
  carouselGrid: () => ({
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },
    backgroundcolor: '#f0f0f0'
  }),
  carouselPagImage: () => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }),
  paper: () => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }),
  carousel: () => ({
    [theme.breakpoints.down('sm')]: {
      padding: '0px !important'
    },
    // height: '60vh',
    marginBottom: '40px'
  }),
  arrowButton: () => ({
    backgroundColor: 'red'
  }),
  slideNumber: (data) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: data?.typography?.bodyFontFamily || 'Georgia, Helvetica Neue, Arial, sans-serif',
    fontSize: `${data?.typography?.bodyFontSize}em` || '1em'
  }),
  cardText: () => ({
    [theme.breakpoints.down('xs')]: {
      padding: '50px 10% 0px 10%'
    },
    padding: ' 50px 15% 0px 30%',
    height: '400px',
    // height: '55vh',
    overflow: 'auto'
  }),
  name: () => ({
    color: '#555555 !important',
    paddingtop: '50px'
  }),
  colorPrimary: {
    backgroundColor: '#D0D0BC'
  },
  barColorPrimary: {
    backgroundColor: '#9A996E'
  }
}));
