/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1
  }),
  gridStyle: () => ({
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }),
  paper: () => ({
    // padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  }),
  partnerLogo: () => ({
    maxHeight: '120px',
    margin: '15px 10px'
  }),
  newContainer: () => ({
    maxWidth: '1800px',
    padding: '80px 140px',
    backgroundColor: '#f0f0f0',
    [theme.breakpoints.up('xs')]: {
      padding: '16px',
      textAlign: 'center'
    }
  })
}));
