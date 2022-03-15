/* eslint-disable import/no-cycle */
import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import Row from '../row';

export default function ContainerCmp({ data }) {
  const classes = useStyles(data);
  return (
    <>
      <div className={classes.root}>
        <Grid container alignContent="center">
          {
            data.rows?.map((row) => <Row row={row} key={row.id} />)
          }
        </Grid>
      </div>
    </>
  );
}
