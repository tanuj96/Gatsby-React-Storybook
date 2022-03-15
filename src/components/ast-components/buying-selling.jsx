/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import { navigate } from 'gatsby-link';
import IconButton from '@material-ui/core/IconButton';
import { myStyles } from '../signuppopup/styles';
import { AstContextDispatch } from '../../utils/ast-context';

export default function BuySell({ data, context }) {
  const classes = myStyles();
  const dispatch = useContext(AstContextDispatch);
  const [lead, setLead] = useState({});

  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    setLead(getLead);
  }, []);

  const handleOperationType = (hasBuy, hasSell) => {
    if (hasBuy && !hasSell) {
      dispatch({ type: 'BUY_SELL', value: { ...lead, operationType: 'BUY', offrampReason: context.offrampReason } });
    } else if (!hasBuy && hasSell) {
      dispatch({ type: 'BUY_SELL', value: { ...lead, operationType: 'SELL', offrampReason: context.offrampReason } });
    } else {
      dispatch({ type: 'BUY_SELL', value: { ...lead, operationType: 'BUYSELL', offrampReason: context.offrampReason } });
    }
  };

  return (
    <>
      <div className={classes.buy}>
        <div className={classes.prev}>
          <Link to="/signup">
            <div className={classes.backPage}>
              <ArrowBackIcon />
              {' '}
              Previous
            </div>
          </Link>
          <IconButton aria-label="close" className={classes.margin} onClick={() => navigate('/')}>
            <CloseIcon />
          </IconButton>

        </div>
        <Typography variant="h1" className={classes.pagestitle}>{data.question.internal.content}</Typography>
        <Container maxWidth="md">
          <Grid container spacing={3} className={classes.gridFix}>
            {context.buySellPath.map((path) => (
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Link component="span" onClick={() => handleOperationType(path.hasBuy, path.hasSell)} to={(path.hasBuy && path.hasSell) ? '/signup/basic-militarylender' : ((path.hasBuy && !path.hasSell) ? '/signup/buy/buy-location' : '/signup/sell/sell-location')}>
                  <Card className={classes.singIncard}>
                    <CardContent>
                      <img className={classes.cardImg} src={`https:${path.image.file.url}`} alt="card images" />
                      <Typography variant="h4" className={classes.cardText}>{path.label}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
