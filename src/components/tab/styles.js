/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  tabs: () => ({
    '& button': {
      textTransform: 'none',
      maxWidth: 'inherit',
      minWidth: 'inherit',
      padding: '6px 20px'
    }
  }),
  root: () => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }),
  verticalRoot: () => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 'auto',
    [theme.breakpoints.up('xs')]: {
      display: 'initial'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'initial'
    },
    [theme.breakpoints.up('md')]: {
      display: 'initial'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'flex'
    }
  }),
  tabbackground: (data) => ({
    Height: 200,
    backgroundColor: data?.buttonStyle?.buttonBackgroundColor
  }),
  tabbackgroundVertical: (data) => ({
    backgroundColor: data?.buttonStyle?.buttonBackgroundColor,
    Height: 200,
    zIndex: 10,
    [theme.breakpoints.up('xs')]: {
      width: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      width: 200
    },
    [theme.breakpoints.up('xl')]: {
      width: 200
    }
  }),
  newContainer: () => ({
  }),
  tabContent: () => ({
    '& >div': {
      padding: 10
    },
    '& p': {
      [theme.breakpoints.up('xs')]: {
        textAlign: 'left',
        marginBottom: '0px'
      }
    },
    '& MuiContainer': {
      maxWidth: '100%'
    },
    '& a': {
      overflowWrap: 'break-word'
    }
  })

}));
