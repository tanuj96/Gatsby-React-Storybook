/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const searchResultStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#ffffff',
    margin: '20px 0px',
    padding: '0px'
  },
  searchText: {
    '& span': {
      fontSize: '1.5em',
      color: '#000'
    }

  },
  query: {
    fontSize: '1em !important',
    fontWeight: 'normal'
  },

  searchResult: {
    fontSize: '1.5em'
  },
  dividerMargin: {
    marginBottom: '15px'
  }

}));
