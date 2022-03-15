/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles((theme) => ({
  HeaderLogoSection: () => ({
    height: 80,
    display: 'flex',
    alignItems: 'center'
  }),
  HeaderLogo: () => ({
    maxWidth: '100%'
    // [theme.breakpoints.up('xs')]: {
    //   height: 45
    // },
    // [theme.breakpoints.up('sm')]: {
    //   height: 45
    // },
    // [theme.breakpoints.up('md')]: {
    //   height: 45
    // },
    // [theme.breakpoints.up('lg')]: {
    //   height: '45'
    // }
  })
}));
