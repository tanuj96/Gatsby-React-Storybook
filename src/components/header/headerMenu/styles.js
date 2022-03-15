/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    padding: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw'
    }
  }),

  links: () => ({
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    cursor: 'ponter',
    padding: ' 15px !important',
    '&:hover': {
      textDecoration: 'none'
    },
    [theme.breakpoints.up('xs')]: {
      padding: '18px 20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '18px 20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('md')]: {
      padding: '18px 20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('lg')]: {
      borderBottom: 'none'
    }
  }),
  accordian: {
    width: '80%'
  },
  anchorLinks: {
    color: 'black',
    fontWeight: 'bold'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subLink: {
    display: 'flex',
    flexDirection: 'column'
  },
  linkItem: {
    padding: '0px 10px 10px 10px',
    color: '#000'
  }
}));
