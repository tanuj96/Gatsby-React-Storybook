/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const myStyles = makeStyles(() => ({
  root: () => ({
    flexGrow: 1,
    display: 'flex'
  }),
  imageWrapper: () => ({
    height: 100
  }),
  mainImage: () => ({
    maxWidth: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    maxHeight: '100%'
  }),
  titleHeading: (data) => ({
    color: data?.textColor ? data.textColor : '#000000'
  }),
  details: () => ({
    display: 'flex',
    flexDirection: 'column'
  }),
  content: () => ({
    flex: '1 0 auto'
  }),
  cover: () => ({
    height: 250
  }),
  selected: (data) => ({
    backgroundColor: `${data?.buttonStyle?.buttonBackgroundColor || '#a9a9a9'}!important`,
    color: `${data?.buttonStyle?.buttonTextColor || '#fff'} !important`
  })
}));
