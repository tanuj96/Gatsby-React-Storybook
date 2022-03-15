/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Container, FormControl, TextField, Button
} from '@material-ui/core';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import Box from '@material-ui/core/Box';
import { myStyles, rewardStyles } from './styles';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function CashBackForm({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const cashbackTable = data.cashBackTable;
  const [cashback, setCashback] = useState(0);
  const classes = myStyles(data);
  const rewardClass = rewardStyles(partnerTheme);
  const globalthemClasses = themeStyles(partnerTheme);
  const navigateToPage = (path) => [
    navigate(path)
  ];
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const getCashback = (e) => {
    if (!e) {
      setCashback(0);
      const obj = document.getElementById('cashback');
      animateValue(obj, 0, 0, 1000);
    }
    // eslint-disable-next-line array-callback-return
    cashbackTable.filter((x) => {
      if (parseInt(e, 10) >= x.min && parseInt(e, 10) <= x.max) {
        setCashback(x.cashback);
        const obj = document.getElementById('cashback');
        animateValue(obj, 0, x.cashback, 1000);
      }
    });
  };

  return (
    <Container className={classes.newContainer}>
      <div className={classes.root}>
        <Grid container spacing={1} className={classes.gridWrapper}>
          <Grid item xs>
            <Paper className={clsx(classes.paper, classes.rewardCalc, globalthemClasses.cashbackTop)}>
              <Typography
                variant="h3"
                component="h3"
                className={classes.calcTile}
              >
                {data.calculatorTitle}
              </Typography>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                className={classes.harizantalGrid}
              >

                <FormControl
                  fullWidth
                  noValidate
                  autoComplete="off"
                  className={classes.rewardCalcInput}
                >
                  <TextField
                    id="filled-basic"
                    label="Purchase or Sale Price"
                    variant="filled"
                    className={rewardClass.rewardCalcInputField}
                    onChange={(event) => getCashback(event.target.value)}
                  />
                </FormControl>
                <Box>
                  <Typography display="inline" variant="h1" className={classes.rewardH1}>
                    =
                    {data.showSign && ' $'}
                  </Typography>
                  <Typography display="inline" variant="h1" className={classes.rewardH1} id="cashback">
                    {cashback}
                  </Typography>

                </Box>

                <Typography variant="body2" className={classes.rewardCashText}>
                  {data.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disableRipple
                  className={globalthemClasses.button}
                  onClick={() => navigateToPage('/customer-info')}
                >
                  {data.calculatorLink.label}
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            sm={12}
            xs={12}
            className={classes.gridColumn}
          >
            <Paper className={classes.paper} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
