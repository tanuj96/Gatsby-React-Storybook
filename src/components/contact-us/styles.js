/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
export const constactUsStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  margin: {
    margin: '8px 0px 8px 0px'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  validationList: {
    color: 'red'
  },
  none: {
    display: 'block'
  },
  success: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    width: '100%',
    height: '100vh'
  },
  roundTick: {
    width: '150px',
    height: '150px'
  },
  contactUs: {
    textTransform: 'none !important',
    color: '#000'
  },
  contactIcon: (data) => ({
    color: data?.buttonStyle?.buttonBackgroundColor
  }),
  button: (data) => ({
    marginLeft: '15px',
    border: `1px solid ${data?.buttonStyle?.buttonBackgroundColor}`,
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 0px 15px 15px'

    }
  })
}));
