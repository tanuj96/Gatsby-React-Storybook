/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { myStyles } from '../signuppopup/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby';
import '../../styles.scss';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from '../../utils/theme-context';
import { themeStyles } from '../../styles';
import { AstContextDispatch } from '../../utils/ast-context';
import Helper from './helper';

export default function PropertyTypes({ data, context }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const dispatch = useContext(AstContextDispatch);
  const [isActive] = useState(true);
  const [helper, setHelper] = useState(false);
  const [code, setCode] = useState([]);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const handleToggle = (event) => {
    if (code.includes(event)) {
      const newCode = code.filter((propCode) => {
        propCode !== event;
      });
      setCode(newCode);
    } else {
      setCode([...code, event]);
    }
  };

  const handlerClick = (path) => {
    dispatch({ type: 'PROP_TYPE', value: { ...lead, buyPropTypeCode: code } });
    navigate(path);
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
      { !helper
    && (
    <>
      <div className={classes.buy}>
        <div className={classes.prev}>
          <Link to={`/signup/${context.previous.screenCategory.toLowerCase().replace(/\s/g, '')}/${context.previous.screenType.toLowerCase().replace(/\s/g, '')}`}>
            <div className={classes.backPage}>
              <ArrowBackIcon />
              {' '}
              Previous
            </div>
          </Link>
          <div className={classes.backPage}>
            <Typography variant="caption">
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
        <Typography variant="h1" className={classes.pagestitle}>{data.question.internal.content}</Typography>
        <Typography variant="caption" className={classes.caption}>Select all that apply.</Typography>
        <Container maxWidth="md">
          <Grid container maxWidth="lg" className={classes.cardsGrid}>
            {context.propertyTypes.map((type) => (
              <Grid
                item
                lg={4}
                onClick={() => handleToggle(type.code)}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Card component="button" tabIndex="0" className={clsx(classes.singIncard, isActive && (code.includes(type.code)) ? 'selected' : '')}>
                  <CardContent>
                    <img className={classes.cardImg} src={`https:${type.icon.file.url}`} alt="" />
                    <Typography variant="h4" className={classes.cardText}>{type.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Button onClick={() => handlerClick(`/signup/${context.next.screenCategory.toLowerCase().replace(/\s/g, '')}/${context.next.screenType.toLowerCase().replace(/\s/g, '')}`)} variant="contained" className={clsx(globalThemeCss.button, classes.nextButton)}>
          Next
        </Button>
      </div>

    </>
    )}
    </>
  );
}
