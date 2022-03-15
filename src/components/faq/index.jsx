/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import clsx from 'clsx';
import { myStyles } from './styles';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function Faq({ data }) {
  const classes = myStyles();
  const partnerTheme = useContext(ThemeContext);
  const globalthemClasses = themeStyles(partnerTheme);
  return (
    <Container className={classes.newContainer}>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gridNoPadding}>
          <Grid item xs={12} className={classes.gridNoPadding}>
            <Paper className={classes.paper}>
              <Typography variant="h2">{data.title}</Typography>
              <hr className={clsx(globalthemClasses.progressBarColor, classes.hr)} />
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.gridNoPadding}>
            <Paper className={classes.paper}>
              {data.faqItem.map((item) => (
                <Accordion className={classes.bg} key={item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h3">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {documentToReactComponents(JSON.parse(item.answer.raw))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
