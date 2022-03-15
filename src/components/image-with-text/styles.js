/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

const alignMap = {
  Left: 'flex-start',
  Center: 'center',
  End: 'flex-end'
};

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1
  }),
  paper: () => ({
    color: theme.palette.text.primary,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  }),
  mainImage: (data) => ({
    maxWidth: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: data?.imageMaxHeight || '100%'
  }),
  imageWrapper: (data) => ({
    height: data?.imageMaxHeight || '100%'
  }),
  titleHeading: (data) => ({
    color: data?.textColor ? data.textColor : '#000000'
  }),
  hr: () => ({
    width: '80px',
    height: '8px',
    border: 'none',
    borderRadius: '0',
    [theme.breakpoints.up('xs')]: {
      margin: '0 auto'
    },
    [theme.breakpoints.up('md')]: {
      margin: '0'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0'
    }
  }),
  p: (data) => ({
    color: data?.textColor ? data.textColor : 'inherit'
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

export const imageStyles = makeStyles((theme) => ({
  imageWrapper: (data) => ({
    height: data?.imageMaxHeight ? data.imageMaxHeight : '100%'
  }),
  titleHeading: (data) => ({
    color: data?.textColor ? data.textColor : '#000000'
  }),
  p: (data) => ({
    color: data?.textColor ? data.textColor : 'inherit'
  }),
  underline: (data) => ({
    display: 'flex',
    width: '100%',
    justifyContent: alignMap[data.alignText] || 'flex-start'
  })
}));
