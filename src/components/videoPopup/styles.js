/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    flexGrow: 1
  }),
  paper: () => ({
    color: 'white',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0px !important',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left'
    }
  }),
  Overlay: () => ({
    backgroundColor: 'rgba(0,0,0,0.8) !important',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  }),
  gridWrapper: () => ({
    position: 'relative',
    margin: 'auto'
  }),
  newContainer: () => ({
    maxWidth: '1800px',
    backgroundImage:
      'url(https://images.ctfassets.net/zycm071ypzte/7L0VS4Gbe1WhCyzkrIXtTW/907295f656e14472aa9123c8623bea77/rmr_video_background_houses.PNG)',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('xs')]: {
      padding: '24px',
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '80px 200px',
      textAlign: 'left'
    },
    [theme.breakpoints.up('md')]: {
      padding: '80px 200px',
      textAlign: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '80px 200px',
      textAlign: 'left'
    }
  }),
  leftTitle: () => ({
    padding: '20px 0',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'left'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  }),
  leftDesc: () => ({
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      maxWidth: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      maxWidth: '100%'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      maxWidth: '100%'
    },
    maxWidth: '340px'
  }),
  videoButton: () => ({
    [theme.breakpoints.up('xs')]: {
      paddingLeft: '0',
      paddingTop: '10%',
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '0',
      paddingTop: '10%',
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0',
      paddingTop: '10%',
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '20%',
      paddingTop: '0%',
      width: '540px'
    },
    color: '#000',
    textAlign: 'center',
    height: '304px',
    boxSizing: 'content-box'
  }),
  videoBG: () => ({
    height: '100%',
    width: '100%'
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
  }),
  playButton: () => ({
    position: 'relative'
  }),
  playButtonIcon: () => ({
    position: 'absolute',
    left: '20px',
    color: '#fff',
    bottom: '15px',
    width: '50px',
    height: '50px',
    '&:hover': {
      color: '#000'
    }
  }),
  videoMain: () => ({
    position: 'relative',
    padding: '6px',
    backgroundColor: '#fff'
  })
}));
