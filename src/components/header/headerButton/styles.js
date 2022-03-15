import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const myStyles = makeStyles((theme) => ({
  HeaderButtonRes: {
    [theme.breakpoints.up('xs')]: {
      paddingLeft: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e6e6e6'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '15px',
      paddingBottom: '0',
      borderBottom: 'none'
    }
  }
}));

export const BootstrapButton = withStyles({
})(Button);
