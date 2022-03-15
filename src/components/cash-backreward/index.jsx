/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/order */
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { navigate } from 'gatsby-link';
import { useStyles } from './styles';
import { themeStyles } from '../../styles';
import '../../styles.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ThemeContext from '../../utils/theme-context';

export default function CashBackReward({ data }) {
  const bgColor = [{
    backgroundColor: data.backgroundColor
  }];
  const classes = useStyles({ backgroundColor: '#C8E0A8', bgColor });
  const partnerTheme = useContext(ThemeContext);
  const globalthemClasses = themeStyles(partnerTheme);
  const navigateToPage = (path) => [
    navigate(path)
  ];
  return (
    <div className={clsx(classes.root, globalthemClasses.cashbackRewardBackground)}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.gridWrapper}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h2">{data.title}</Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container item spacing={2}>
            <Button onClick={() => navigateToPage('/customer-info')} variant="contained" className={clsx(globalthemClasses.button, classes.signupButton)}>
              {data.button.link.label}
            </Button>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2">
              {documentToReactComponents(JSON.parse(data.subText.raw))}
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
