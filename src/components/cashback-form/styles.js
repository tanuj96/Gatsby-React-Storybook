/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1
  }),
  calcTile: (data) => ({
    paddingLeft: data.rewardCalcViewType === 'Horizontal' ? '10px' : '0px',
    textAlign: data.rewardCalcViewType === 'Horizontal' ? 'left' : 'center'
  }),
  harizantalGrid: (data) => ({
    flexDirection: data.rewardCalcViewType === 'Horizontal' ? 'row' : 'column'
  }),
  paper: () => ({
    color: 'white',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0px !important',
    [theme.breakpoints.up('xs')]: {
      padding: '0px',
      textAlign: 'left',
      marginBottom: '50px'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0',
      textAlign: 'left'
    },
    [theme.breakpoints.up('md')]: {
      padding: '24px 105px 24px 0px',
      textAlign: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '24px 105px 24px 0px',
      textAlign: 'left'
    }
  }),
  Overlay: () => ({
    backgroundColor: 'rgba(2,78,67,0.8) !important',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  }),
  gridWrapper: () => ({
    position: 'relative',
    margin: 'auto',
    verticalAlign: 'middle',
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  newContainer: () => ({
    position: 'relative'
  }),

  rewardCalc: () => ({
    backgroundColor: '#ffffff',
    color: '#000',
    textAlign: 'center',
    padding: '35px 0'
  }),
  rewardCalcInput: (data) => ({
    width: data.rewardCalcViewType === 'Horizontal' ? '40%' : '85%',
    marginTop: '20px'
  }),
  rewardH1: () => ({
    color: '#464749 !important'
  }),
  rewardCashText: (data) => ({
    color: '#464749 !important',
    marginBottom: data.rewardCalcViewType === 'Horizontal' ? '0px' : '20px'
  }),
  gridColumn: () => ({
    [theme.breakpoints.up('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  })
}));

export const rewardStyles = makeStyles(() => ({
  rewardCalcInputField: (data) => ({
    '& .MuiFilledInput-root': {
      borderRadius: '0px !important'
    },
    '& .MuiFilledInput-root::before': {
      borderBottom: '1px solid #f0f0f0 !important'
    },
    '& .MuiFormLabel-root': {
      fontFamily: `${data.typography.body2}` || 'Georgia, Helvetica Neue, Arial, sans-serif'
    }
  })
}));
