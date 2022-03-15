/* eslint-disable no-dupe-keys */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1,
    padding: '0',
    width: '100%'
  }),
  paper: () => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  }),
  newContainer: () => ({
    maxWidth: '100%'
  }),
  hr: () => ({
    width: '80px',
    height: '8px',
    border: 'none',
    borderRadius: '0'
  }),

  bg: () => ({
    [theme.breakpoints.up('xs')]: {
      textAlign: 'left',
      padding: '30px 10px'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      padding: '30px 10px'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      padding: '30px 68px'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      padding: '30px 68px'
    },
    backgroundColor: '#f0f0f0',
    boxShadow: 'none',
    marginBottom: '1rem'
  }),
  gridNoPadding: () => ({
    padding: '0 !important',
    [theme.breakpoints.up('xs')]: {
      padding: '15px 13px !important'
    }
  })
}));
