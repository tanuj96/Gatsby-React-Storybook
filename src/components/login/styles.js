/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';
import loginImg from '../../images/bg-login.jpg';

export const loginStyles = makeStyles((theme) => ({
  loginForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '86vh',
    flex: '1',
    backgroundImage: `url(${loginImg})`,
    [theme.breakpoints.up('md')]: {
      padding: '30px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px'
    }

  },
  root: {
    backgroundColor: '#fff',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    padding: '30px'
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  singinText: {
    color: '#999'
  },
  loginFooter: {
    paddingTop: '20px',
    '& a': {
      borderRight: '1px solid #999',
      paddingRight: '5px',
      textDecoration: 'underline !important'
    }
  },
  fullWidth: {
    width: '100%'
  },
  cookieLink: {
    color: 'rgb(70, 71, 73)',
    fontSize: '16.1px',
    fontFamily: 'Georgia, Arial, Helvetica, sans-serif',
    borderBottom: '1px dotted'
  }

}));
