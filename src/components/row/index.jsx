/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

import Column from '../column';

const alignItemsMap = {
  Top: 'flex-start',
  Center: 'center',
  Bottom: 'flex-end',
  Stretch: 'stretch'
};

const justifyContentMap = {
  Start: 'flex-start',
  Center: 'center',
  End: 'flex-end',
  'Space Around': 'space-around',
  'Space Between': 'space-between',
  'Space Evenly': 'space-evenly'
};

function Row({ row }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = useStyles(row);
  return (
    <>
      <Grid container item spacing={partnerTheme?.grid?.gridSpacing || 0} xs={12} className={classes.root}>
        <Grid
          container
          justifyContent={justifyContentMap[row.justifyContent] || partnerTheme?.grid?.gridJustifyContent || 'space-between'}
          alignItems={alignItemsMap[row.alignItems] || partnerTheme?.grid?.gridAlignments || 'flex-start'}
          spacing={row.spacing || partnerTheme?.grid?.gridSpacing || 0}
        >
          {row?.columns
            .map((column) => (
              <Column
                key={column.id}
                data={Object.assign(column, { alignText: row.alignText })}
              />
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Row;
