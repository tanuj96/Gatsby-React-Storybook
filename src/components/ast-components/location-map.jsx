/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby-link';
import clsx from 'clsx';
import { myStyles } from '../signuppopup/styles';
import '../../styles.scss';
import Map from '../static-map/map';
import { AstContextDispatch } from '../../utils/ast-context';
import Helper from './helper';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';
import IconButton from '@material-ui/core/IconButton';

export default function LocationMap({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(AstContextDispatch);
  const [helper, setHelper] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const setPlace = (location) => {
    if (location.length > 0) {
      dispatch({
        type: 'SET_LOCATION',
        value: {
          ...lead, buyCity: location.split(',')[0], buyState: location.split(',')[1], buyZip: '93505'
        }
      });
      setNextDisabled(false);
    }
  };

  const helperShow = () => {
    setHelper(true);
  };

  const helperHide = () => {
    setHelper(false);
  };

  return (
    <>
      {helper && (
      <>
        <Helper helperData={data} helperSwitch={helperHide} />
      </>
      )}
      {!helper
    && (
    <>
      <div className={classes.root}>
        <div className={classes.prev}>
          <Link to={(lead.operationType === 'BUYSELL' ? `/signup/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}` : `/signup/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}`)}>
            <div className={classes.backPage}>
              <ArrowBackIcon />
              Previous
            </div>
          </Link>
          <div className={classes.backPage}>
            <Typography className={classes.helperButton} variant="caption">
              <Button onClick={helperShow}>
                <ContactSupportIcon />
                Have Questions
              </Button>
            </Typography>
          </div>
          <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid
          spacing={3}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Typography variant="h1" className={classes.pagestitle}>{data.question.internal.content}</Typography>
          </Grid>
          <Grid item lg={12}>
            <div className="main-wrapper">
              <Map place={setPlace} />
            </div>
          </Grid>
          <Link to={(lead.operationType === 'BUYSELL' ? `/signup/${context.next.screenType.toLowerCase().replace(/\s/g, '')}` : `/signup/${lead?.operationType?.toLowerCase().replace(/\s/g, '')}/${context.next.screenType.toLowerCase().replace(/\s/g, '')}`)}><Button disabled={nextDisabled} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained">NEXT</Button></Link>
        </Grid>
      </div>

    </>
    )}
    </>
  );
}
