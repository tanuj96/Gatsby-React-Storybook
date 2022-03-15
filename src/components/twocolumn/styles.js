/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1
  }),
  paper: () => ({
    textAlign: 'left',
    color: 'theme.palette.text.primary',
    boxShadow: 'none',
    verticalAlign: 'middle',
    display: 'table-cell'
  }),
  mainImage: () => ({
    maxWidth: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    maxHeight: '100%'
  }),

  hr: () => ({
    backgroundColor: '#9a996e',
    width: '80px',
    height: '8px',
    border: 'none',
    borderRadius: '0',
    margin: '0'
  }),
  paddingLeft: () => ({

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '0'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '0'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15%'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '15%'
    }
  }),
  imageGrid: () => ({
    display: 'table'
  }),
  newContainer: () => ({
  })
}));
