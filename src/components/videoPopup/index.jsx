/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Container } from '@material-ui/core';
import clsx from 'clsx';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { myStyles } from './styles';
import Popup from './videoPopUp';

export default function VideoPopUp({ data }) {
  const classes = myStyles();
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Container className={classes.newContainer}>
      <div className={classes.Overlay} />
      <div className={classes.root}>
        <Grid container spacing={1} className={classes.gridWrapper}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h2"
                className={classes.leftTitle}
              >
                {data.title}
              </Typography>
              <Typography variant="body2" className={classes.leftDesc}>
                {documentToReactComponents(JSON.parse(data.subText.raw))}
              </Typography>
              <br />
            </Paper>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Paper className={clsx(classes.paper, classes.videoButton)}>
              <Button
                className={classes.playButton}
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                <img src="https://cdn.qumucloud.com/origin/public/cartus.qumucloud.com/LAPdobvOgaG/iZ9dKZI0psD;wc=1920;hc=1080" alt="video" className={classes.videoBG} />
                <PlayCircleOutlineIcon className={classes.playButtonIcon} />
              </Button>
              <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <div className={classes.videoMain}>
                  <iframe width="690" src="https://cartus.qumucloud.com/view/LAPdobvOgaG?autoPlay=true&embed=true&host=widgets&iframeName=kv-video-player-1-iframe-9247717&autoscale=true&AppProperties.PlayerShowEmbedButton=false" />
                </div>

              </Popup>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </Container>
  );
}
