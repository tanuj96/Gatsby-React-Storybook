/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  hr: () => ({
    backgroundColor: '#9a996e',
    width: '80px',
    height: '8px',
    border: 'none',
    borderRadius: '0'
  }),
  root: () => ({
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1);',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
    },
    padding: '20px 0',
    [theme.breakpoints.up('xs')]: {
      minHeight: 150
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 150
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 300
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 340
    }
  }),
  cardInner: () => ({
    marginTop: 20
  })
}));
