/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import Controls from './controls/Controls';
import { myStyles, BorderLinearProgress } from './styles';

export default function Popup(props) {
  const {
    title, children, openPopup, setOpenPopup
  } = props;
  const classes = myStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <div className={classes.root}>
        <BorderLinearProgress variant="determinate" value={(props.progress + 1) * 10} />
      </div>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            <HelpRoundedIcon />
            {title}
          </Typography>
          <Controls.ActionButton
            color="grey"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
