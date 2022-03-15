/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const myStyles = makeStyles((theme) => ({
  root: (data) => ({
    backgroundColor: data?.backgroundColor ? data.backgroundColor : 'transparent',
    '&:hover': {
      boxShadow: data?.hasHoverEffect ? '0px 0px 8px 2px rgb(176 176 176 / 70%)' : 'none',
      cursor: 'pointer'
    },
    height: '100%',
    width: '100%'
  })
}));
