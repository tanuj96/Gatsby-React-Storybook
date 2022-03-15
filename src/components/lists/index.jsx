/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { RichText } from '../RichText';
import { useStyles } from './styles';

export default function Lists({ data }) {
  const classes = useStyles();
  return (
    <>

      <List className={classes.root}>
        {data.listItems.map((list) => (
          <>
            <ListItem alignItems="flex-start" className={classes.listItem}>
              <Grid container>
                <Grid container xs={12} sm={2} md={2} lg={2} alignItems="center" justifyContent="center">
                  <img alt="listimage" src={list?.listBody[0].image.file?.url} alt={list?.listBody[0].image.file?.url.substring(list?.listBody[0].image.file?.url.lastIndexOf('/') + 1)} className={classes.listImage} />
                </Grid>
                <Grid container xs={12} sm={10} md={10} lg={10} alignItems="flex-start">
                  <ListItemText
                    secondary={(
                      <>
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                            align="left"
                          >
                            <RichText data={list?.listBody[1]} />
                          </Typography>

                        </>

                      </>
              )}
                  />
                </Grid>
                <Divider className={classes.divider} />
              </Grid>
            </ListItem>

          </>
        ))}

      </List>

    </>
  );
}
