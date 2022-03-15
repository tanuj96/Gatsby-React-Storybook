/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  headerContent: () => ({
    maxWidth: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    borderBottom: '1px solid #f0f0f0',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    zIndex: '100',
    backgroundColor: '#ffffff'
  }),
  InnerContainer: () => ({
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1800px',
    width: 'calc(100% - 100px);',
    [theme.breakpoints.up('xs')]: {
      width: 'calc(100% - 30px);'
    },
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 30px);'
    },
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 100px);'
    },
    margin: '0 auto'
  }),
  InnerContainerRes: () => ({
    paddingTop: '15px'
  }),
  gridItem: () => ({
    paddingTop: '0 !important',
    paddingBottom: '0px !important'
  }),
  menuWhiteSection: () => ({
    [theme.breakpoints.up('xs')]: {
      width: '80vw'
    },
    [theme.breakpoints.up('sm')]: {
      width: '80vw'
    },
    [theme.breakpoints.up('md')]: {
      width: '80vw'
    },
    backgroundColor: '#fff',
    height: '100vh',
    padding: '40px 0px'
  }),
  CloseButton: () => ({
    [theme.breakpoints.up('xs')]: {
      top: '22px',
      left: '8%'
    },
    [theme.breakpoints.up('sm')]: {
      top: '22px',
      left: '13.7%'
    },
    [theme.breakpoints.up('md')]: {
      top: '22px',
      left: '15%'
    },
    position: 'absolute',

    width: '20px',
    height: '20px',
    color: '#fff'
  }),

  gridContent: () => ({
    height: '100px',
    margin: '0'
  }),
  headerRight: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 'auto'
  }),
  headerLeft: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  })
  // gridInnerItem: () => ({
  //   padding: '15px 0px'
  // })
}));
