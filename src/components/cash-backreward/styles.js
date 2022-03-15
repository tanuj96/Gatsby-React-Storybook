/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    flexGrow: 1,
    textAlign: 'center',
    color: '#000',
    backgroundColor: `${props.bgColor[0].backgroundColor}`,
    [theme.breakpoints.down('lg')]: {
      padding: '80px 140px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '80px 140px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '15px 30px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '15px 30px'
    }
  }),
  gridWrapper: () => ({
    padding: '20px 0'
  }),
  signupButton: () => ({
    margin: '30px auto 10px'
  })
}));
