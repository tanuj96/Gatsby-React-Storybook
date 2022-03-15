import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { myStyles } from '../signuppopup/styles';

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

      <DialogTitle className={classes.dialogTitle}>
        {/* <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>

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
        </div> */}
        <CloseIcon onClick={() => props.setOpenPopup(false)} />
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
