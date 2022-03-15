/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import DynamicComponent from '../../utils/dynamic-component';
import { myStyles } from './styles';

export default function Column({ data }) {
  const classes = myStyles(data);
  return (
    <>
      <Grid container item alignContent="center" md={data.columnSize || true} xs={12}>

        {/* Card Version */}
        {data?.isCard && (
          <Card className={classes.root}>
            <CardContent>
              {DynamicComponent(
                data.component.sys.contentType.sys.id,
                Object.assign(data.component, {
                  textColor: data.textColor,
                  alignText: data.alignText
                })
              )}
            </CardContent>
          </Card>
        )}

        {/* Without Card */}
        {!data?.isCard && (
          DynamicComponent(
            data.component?.sys?.contentType.sys.id,
            Object.assign(data.component, {
              textColor: data.textColor,
              alignText: data.alignText
            })
          )
        )}
      </Grid>
    </>
  );
}
