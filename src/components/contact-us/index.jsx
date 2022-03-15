/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import { constactUsStyles } from './styles';
import ThemeContext from '../../utils/theme-context';
import { themeStyles } from '../../styles';

const defaults = {
  thankYouTitle: 'Thank you for your message!',
  thankYouText: 'Our team will be in touch soon.',
  errorTitle: 'Sorry! Failed to submit.',
  errorText: 'Try again in some time'
};

const DialogTitle = withStyles()((props) => {
  const classes = constactUsStyles();
  const {
    children, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function ContactDialogs({ contactFormDetails, metadata }) {
  const partnerTheme = useContext(ThemeContext);
  const globalthemClasses = themeStyles(partnerTheme);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [defaultForm, setDefaultForm] = useState(true);
  const classes = constactUsStyles(partnerTheme);
  const handleClickOpen = () => {
    setOpen(true);
    setDefaultForm(true);
    setSuccess(false);
    setFailed(false);
    setName('');
    setSubject('');
    setEmail('');
    setMessage('');
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function fetchData() {
    const data = {
      trace_id: uuidv4(),
      partner: metadata.partner,
      appType: metadata.appType,
      processor: metadata.processor,
      data: {
        name,
        email,
        subject,
        message,
        deliveryEmail: contactFormDetails?.deliveryEmailAddress,
        metadata: {
          CliNbr: metadata.clientNumber,
          LeadSource: metadata.leadSource,
          hesAstBuyCode: metadata.hesAstBuyCode,
          hesAstSellCode: metadata.hesAstSellCode,
          hesAstBuySellCode: metadata.hesAstBuySellCode
        }
      }
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${process.env.GATSBY_CONTACT_API}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setDefaultForm(false);
        } else {
          setFailed(true);
          setDefaultForm(false);
        }
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const variantVal = partnerTheme?.buttonStyle?.buttonType === 'contained' || partnerTheme?.buttonStyle?.buttonType === 'outlined' || partnerTheme?.buttonStyle?.buttonType === 'text' ? partnerTheme?.buttonStyle?.buttonType : 'contained';
  return (
    <>
      <Button
        size="large"
        variant={variantVal}
        className={classes.button}
        startIcon={<QuestionAnswerIcon className={classes.contactIcon} />}
        onClick={() => handleClickOpen()}
      >
        <Typography varient="body1" className={classes.contactUs}>Contact Us</Typography>
      </Button>
      { contactFormDetails && (
      <Dialog onClose={handleClose} aria-labelledby="contact-dialog-title" open={open}>
        {defaultForm === true
        && (
        <div>
          <DialogTitle id="contact-dialog-title" onClose={handleClose}>
            <Typography variant="h4" align="center" m={1}>{contactFormDetails?.formTitle}</Typography>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom className={classes.margin}>
              {contactFormDetails?.helperText}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                className={classes.margin}
                fullWidth
                label="Name "
                value={name}
                onInput={(e) => setName(e.target.value)}
                required
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.margin}
                fullWidth
                label="Enter your email "
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                required
                type="email"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.margin}
                fullWidth
                label="Subject "
                value={subject}
                onInput={(e) => setSubject(e.target.value)}
                required
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.margin}
                fullWidth
                id="outlined-multiline-static"
                label="Your message "
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                value={message}
                onInput={(e) => setMessage(e.target.value)}
                required
                size="small"
              />
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                className={classes.margin}
              >
                <Button type="submit" variant="contained" className={globalthemClasses.button}>SEND MESSAGE</Button>
              </Grid>

            </form>
          </DialogContent>
        </div>
        )}

        {success === true
        && (
        <DialogContent dividers className={classes.success}>
          <DialogTitle id="contact-dialog-title" onClose={handleClose} />
          <CheckCircleOutlineIcon name="round-tick" color="#181818" className={classes.roundTick} />
          <Typography variant="h3">{defaults.thankYouTitle}</Typography>
          <Typography variant="body1">{defaults.thankYouText}</Typography>
        </DialogContent>
        )}
        {failed === true
        && (
        <DialogContent dividers className={classes.success}>
          <DialogTitle id="contact-dialog-title" onClose={handleClose} />
          <ErrorOutlineIcon name="round-tick" color="#181818" className={classes.roundTick} />
          <Typography variant="h3">{defaults.errorTitle}</Typography>
          <Typography variant="body1">{defaults.errorText}</Typography>
        </DialogContent>
        )}
      </Dialog>
      ) }
    </>
  );
}
