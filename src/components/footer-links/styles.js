/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const footerStyles = makeStyles((theme) => ({
  links: (data) => ({
    color: data?.typography?.footerLinkColor || '#464749',
    borderBottom: '1px dotted',
    fontSize: `${data?.typography?.footerFontSize}em` || '1em',
    fontFamily: data?.typography?.bodyFontFamily || 'Georgia, Arial, Helvetica, sans-serif'

  }),
  footerLinks: () => ({
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      justifyContent: 'center !important'
    }
  }),
  cookieLink: (data) => ({
    color: data?.typography?.footerLinkColor || '#464749',
    fontSize: `${data?.typography?.footerFontSize}em` || '1em',
    borderBottom: '1px dotted',
    fontFamily: data?.typography?.bodyFontFamily || 'Georgia, Arial, Helvetica, sans-serif'
  })
}));
