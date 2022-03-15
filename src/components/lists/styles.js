/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#fff'
  },
  inline: {
    display: 'inline',
    '& $p': {
      margin: '0px'
    },
    '& h6': {
      margin: '10px 0px'
    }
  },
  listImage: {
    width: '100%',
    display: 'flex'
  },
  listItem: {
    margingTop: '10px'
  },
  divider: {
    width: '100%',
    marginTop: 10
  }
}));
