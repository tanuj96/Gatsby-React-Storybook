/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const richTextStyles = makeStyles(() => ({
  richTextContainer: () => ({
    background: '#f0f0f0 '
  }),
  richTextPara: (data) => ({
    '& h1': {
      fontSize: `${data?.typography?.headingFontSize}em` || '2.5em',
      fontWeight: '600',
      lineHeight: '1.3'
    },
    '& h2': {
      fontSize: `${data?.typography?.headingFontSize}em` || '2.5em',
      fontWeight: '400',
      lineHeight: '1.3'
    },
    '& h3': {
      fontSize: `${data?.typography?.h3}em` || '1.5em',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '& h4': {
      fontSize: `${data?.typography?.h4}em` || '1.5em',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    '& h5': {
      fontSize: `${data?.typography?.h5}em` || '1.15em',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    '& h6': {
      fontSize: `${data?.typography?.h6}em` || '1em',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '& p': {
      fontSize: `${data?.typography?.bodyFontSize}em` || '1em',
      fontWeight: '400',
      lineHeight: '1.5'
    }
  })
}));
