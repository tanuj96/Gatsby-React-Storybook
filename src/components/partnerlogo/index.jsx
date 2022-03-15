import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { myStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

export default function PartnerLogo({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const [partnerLogos] = useState(data);
  const classes = myStyles(partnerTheme);

  return (
    <div className={classes.root}>
      <Container className={classes.newContainer}>
        {/* <div className={classes.partnerLogoTitle}> */}
        <Typography variant="h4">
          {documentToReactComponents(JSON.parse(partnerLogos.description.raw))}
        </Typography>
        {/* </div> */}
        <Grid container spacing={0} className={classes.gridStyle}>

          { partnerLogos.partnerLogo.map((logo) => (
            <Grid item xs={12} lg={3} md={4} sm={6} key={logo.id}>
              <Paper className={classes.paper}>
                <img
                  className={classes.partnerLogo}
                  alt="logo1"
                  src={`https:${logo.file.url}`}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
