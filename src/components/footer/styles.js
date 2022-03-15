/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const footerStyles = makeStyles((theme) => ({
  footerContainer: (data) => ({
    background: '#f0f0f0 ',
    maxWidth: '1936px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    [theme.breakpoints.up('xs')]: {
      padding: '16px'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '24px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '24px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px 60px'
    },
    '& p': {
      padding: '0',
      // paddingTop: '10px',
      margin: '0',
      color: data?.typography?.footerTextColor || '#000000',
      fontSize: `${data?.typography?.footerFontSize}em` || '1em'
    },
    '& div:first-of-type': {
      padding: 0,
      maxWidth: '100%'
    }
  })

}));
