/* eslint-disable import/no-duplicates */
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

export const themeStyles = makeStyles(() => ({
  button: (data) => ({
    backgroundColor: `${data?.buttonStyle?.buttonBackgroundColor || '#024E43'}`,
    color: `${data?.buttonStyle?.buttonTextColor || '#FFF'} !important`,
    boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none',
    fontSize: `${data?.buttonStyle?.buttonFontSize}em !important` || '1.15em',
    fontFamily: `${data?.buttonStyle?.buttonFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
    cursor: 'pointer',
    textTransform: 'none',
    boxSizing: 'inherit',
    '&:hover': {
      backgroundColor: data?.buttonStyle?.buttonBackgroundColor || '#024E43',
      borderColor: data?.buttonStyle?.buttonBackgroundColor || '#024E43',
      boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none'
    },
    '&:active': {
      boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none',
      backgroundColor: data?.buttonStyle?.buttonBackgroundColor || '#024E43',
      borderColor: data?.buttonStyle?.buttonBackgroundColor || '#024E43'
    },
    '&:focus': {
      boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none'
    },
    '&:focus-visible': {
      outline: '2px solid black'
    }
  }),

  SecondaryBtn: (data) => ({
    backgroundColor: `${data?.backgroud?.progressBarBackgroundColor || '#9A996E'} !important`,
    color: `${data?.buttonStyle?.buttonTextColor || '#FFF'} !important`,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: `${data?.backgroud?.progressBarBackgroundColor || '#9A996E'} !important`,
      borderColor: `${data?.backgroud?.progressBarBackgroundColor || '#9A996E'} !important`,
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: `${data?.backgroud?.progressBarBackgroundColor || '#9A996E'} !important`,
      borderColor: `${data?.backgroud?.progressBarBackgroundColor || '#9A996E'} !important`
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }),
  progressBarColor: (data) => ({
    backgroundColor: `${data?.backgroud?.progressBarBackgroundColor} !important`
  }),
  progressBarSecondaryColor: (data) => ({
    backgroundColor: `${data?.backgroud?.progressBarBackgroundColorSecondary} !important`
  }),
  cashbackTop: (data) => ({
    borderTop: `10px solid ${data?.backgroud?.progressBarBackgroundColor} !important`
  }),
  cashbackRewardBackground: (data) => ({
    backgroundColor: `${data?.buttonStyle?.buttonBackgroundColor || '#024E43'}`,
    color: '#000000'
  }),
  scrollToTop: (data) => ({
    backgroundColor: `${data?.buttonStyle?.buttonBackgroundColor || '#024E43'}!important`,
    color: `${data?.buttonStyle?.buttonTextColor || '#FFF'} !important`,
    position: 'fixed !important',
    bottom: '60px !important',
    right: '30px !important',
    zIndex: '9999 !important',
    minWidth: 'auto !important',
    boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none',
    fontSize: `${data?.buttonStyle?.buttonFontSize}em !important` || '1.15em',
    fontFamily: `${data?.buttonStyle?.buttonFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
    padding: '15px 30px !important'
  }),
  search: (data) => ({
    display: 'inline-block',
    paddingLeft: '32px',
    paddingRight: '32px',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: `${data?.buttonStyle?.buttonBackgroundColor || '#024E43'}!important`,
    color: `${data?.buttonStyle?.buttonTextColor || '#FFF'} !important`,
    boxShadow: data?.buttonStyle?.boxShadow ? `${data.buttonStyle.boxShadowHorizontalPosition}px ${data.buttonStyle.boxShadowVerticalPosition}px ${data.buttonStyle.boxShadowBlur}px ${data.buttonStyle.boxShadowColor}` : 'none'
  }),
  searchButton: () => ({
    position: 'absolute',
    fontSize: '22px',
    width: '100%',
    margin: '0',
    padding: '0',
    borderRadius: '4px'
  })
}));

export const customeTheme = (data) => createTheme({
  typography: {
    astFontFamily: `${data?.astThemeTypography?.astFontFamily}` || 'Georgia, Arial',
    astBodyTextColor: `${data?.astThemeTypography?.bodyTextColor}` || '#000000',
    astBodyFontSize: `${data?.astThemeTypography?.bodyFontSize}em` || '1em',
    astProgressbarBackground: `${data?.astThemeTypography?.progressBarColor || data?.backgroud?.progressBarBackgroundColor}`,
    astLinkTextColor: `${data?.astThemeTypography?.linkTextColor}`,
    h1: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.headingFontSize}em` || '2.5em',
      fontWeight: '600',
      lineHeight: data?.typography?.headingLineHeight || '1.3'
    },
    h2: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.headingFontSize}em` || '2.5em',
      fontWeight: '300',
      lineHeight: data?.typography?.headingLineHeight || '1.3',
      padding: '20px 0'
    },
    h3: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.h3}em` || '1.5em',
      fontWeight: '500',
      lineHeight: '1.3',
      padding: '20px 0'
    },
    h4: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.h4}em` || '1.5em',
      fontWeight: '400',
      lineHeight: '1.6'
    },
    h5: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.h5}em` || '1.15em',
      fontWeight: '400',
      lineHeight: '1.6'
    },
    h6: {
      fontFamily: `${data?.typography?.headingFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.h6}em` || '1em',
      fontWeight: '700',
      lineHeight: '1.6',
      marginBottom: '10px'
    },
    body1: {
      fontFamily: `${data?.typography?.bodyFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.bodyFontSize}em` || '1.15em',
      fontWeight: '400',
      lineHeight: '1.3',
      marginBottom: '10px'
    },
    body2: {
      fontFamily: `${data?.typography?.bodyFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.bodyFontSize}em` || '1em',
      fontWeight: '400',
      lineHeight: data?.typography?.headingLineHeight || '1.5'
    },
    subtitle1: {
      fontFamily: `${data?.typography?.bodyFontFamily}` || 'Georgia, Arial, Helvetica, sans-serif',
      fontSize: `${data?.typography?.bodyFontSize}em` || '1em',
      fontWeight: '700',
      lineHeight: '1.6'
    }
  }
});
