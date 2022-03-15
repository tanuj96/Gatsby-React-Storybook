/* eslint-disable eqeqeq */
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// eslint-disable-next-line import/no-cycle
import DynamicComponent from '../../utils/dynamic-component';
import { myStyles } from './styles';

export default function TabsAccordion({ data }) {
  const classes = myStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordionMain}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accordionLabel}
          aria-label={data.subAccordionHeaderLabel}
        >

          <Typography className={classes.heading}>{data.accodionHeaderLabel}</Typography>
          {data.sys.contentType.sys.id == 'compSubAccordion' && (
            <Typography className={classes.heading}>{data.subAccordionHeaderLabel}</Typography>
          )}

        </AccordionSummary>

        <AccordionDetails className={classes.SubaccordionStyles}>

          {
            data?.accordionBody?.rows
              .map((row) => row.columns
                .map((column) => DynamicComponent(
                  column.component.sys.contentType.sys.id, column.component
                )))
           }
          {data.sys.contentType.sys.id == 'compSubAccordion' && (
            data?.subAccordionBody?.rows
              .map((row) => row.columns
                .map((column) => DynamicComponent(
                  column.component.sys.contentType.sys.id, column.component
                )))
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
