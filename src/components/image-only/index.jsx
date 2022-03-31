import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: (data) => ({
    maxWidth: '100%',
    maxHeight: data?.maxHeight || '100%'
  })
}));

export default function ImageOnly({ data }) {
  const filename = data?.image?.file?.url.substring(data?.image?.file?.url.lastIndexOf('/') + 1);
  const classes = useStyles(data);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <img src={data?.image?.file?.url} alt={data.image.description} className={classes.root} />
    </Grid>
  );
}
