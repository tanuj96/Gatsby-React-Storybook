/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundImage: `url(${props.bgImg[0].bannerImg1})`,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    backgroundPosition: '100% 100%',
    color: '#fff',
    flexDirection: 'column',
    marginTop: '20px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none'
    }
  }),
  section: () => ({
    background: 'linear-gradient(90deg, rgba(52, 52, 52, 0.7) 43%, rgba(255, 255, 255, 0) 66%)',
    backgroundImage: 'linear-gradient(to right, rgba(52, 52, 52, 0.7), rgba(255, 255, 255, 0))',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
      color: '#000'
    },
    width: '100%',
    padding: '0px 80px'
  }),
  banner: () => ({
    width: '100%',
    [theme.breakpoints.down('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }),
  gridWidth: () => ({
    width: '36%',
    padding: '128px 0px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: 0,
      padding: '20px 0px'
    }
  }),
  bannerImage: () => ({
    width: '100%',
    backgroundPosition: 'cover',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  })
}));
