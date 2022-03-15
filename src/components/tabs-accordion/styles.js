/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
export const myStyles = makeStyles((theme) => ({
  SubaccordionStyles: {
    flexDirection: 'column'
  },
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  accordionLabel: {
    backgroundColor: '#e6e6e6'
  },
  accordionMain: {
    marginBottom: '10px'
  }
}));
