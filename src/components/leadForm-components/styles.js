import { CardContent, makeStyles, withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export const BorderLinearProgress = withStyles((theme) => ({
  root: () => ({
    height: 10,
    borderRadius: 0,
    flexGrow: 1,
    boxShadow: 'none'
  }),
  colorPrimary: () => ({
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  }),
  bar: () => ({
    borderRadius: 0,
    backgroundColor: `${theme.typography.astProgressbarBackground}`
  })
}))(LinearProgress);

export const myStyles = makeStyles((theme) => ({
  root: () => ({
    '& > *': {
      //   margin: theme.spacing(1),
      width: '100%'
    },
    fontFamily: `${theme?.typography?.astFontFamily} !important`,
    flexGrow: 1,
    position: 'relative',
    boxShadow: 'none',
    backgroundColor: 'white'
  }),
  optText: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    color: `${theme?.typography?.bodyTextColor} !important`,
    fontSize: `${theme?.typography?.astBodyFontSize} !important`,
    '& a': {
      color: `${theme?.typography?.astLinkTextColor}`
    }
  }),
  consentText: () => ({
    fontWeight: 'none !important',
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    fontSize: `${theme?.typography?.astBodyFontSize} !important` || '1em',
    '& a': {
      color: `${theme?.typography?.astLinkTextColor}`
    }
  }),
  prevButton: () => ({
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    margin: '1em'
    // borderRadius: '20px'
  }),
  nextButton: () => ({
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    margin: '1em'
    // borderRadius: '20px'
  }),
  helperButton: () => ({
    fontFamily: `${theme?.typography?.astFontFamily} !important`,
    cursor: 'pointer',
    textAlign: 'center'
  }),
  internalContent: () => ({
    textAlign: 'center',
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    fontSize: `${theme?.typography?.astBodyFontSize}em` || '1em'
  }),
  internalSubText: () => ({
    textAlign: 'center',
    // fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  toggleButton: () => ({
    fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  amount: () => ({
    '& *': {
      justifyContent: 'center !important'
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch'
    },
    padding: '20px 0px',
    justifyContent: 'center !important'
  }),
  customAlign: () => ({
    textAlign: 'center',
    padding: theme.spacing(2),
    color: `${theme?.typography?.astBodyTextColor} !important`,
    boxShadow: 'none !important',
    fontFamily: `${theme?.typography?.astFontFamily} !important`,
    fontSize: `${theme?.typography?.astBodyFontSize}em !important` || '1em'
  }),
  paper: () => ({
    padding: theme.spacing(2),
    textAlign: 'left',
    color: `${theme?.typography?.astBodyTextColor} !important`,
    boxShadow: 'none !important',
    fontFamily: `${theme?.typography?.astFontFamily} !important`,
    fontSize: `${theme?.typography?.astBodyFontSize}em !important` || '1em'
  }),
  inputField: () => ({
    width: '100%',
    fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  pagestitle: () => ({
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    lineHeight: '1.2 !important',
    fontSize: '2.5em',
    fontWeight: '100 !important',
    textAlign: 'center !important',
    margin: '20px 0px !important'
  }),
  dialogWrapper: () => ({
    // padding: theme.spacing(2),
    paddingTop: '0',
    position: 'absolute',
    top: theme.spacing(5),
    width: '100%',
    height: '650px'
  }),
  dialogTitle: () => ({
    paddingRight: '0px',
    textAlign: 'center',
    position: 'absolute',
    right: '33px',
    top: '-16px',
    zIndex: 999
  }),
  typoAlign: () => ({
    textAlign: 'center',
    fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  cardImg: () => ({
    height: '90px'
  }),
  cardText: () => ({
    marginTop: '20px',
    // fontFamily: `${theme?.typography?.astFontFamily} !important`,
    fontWeight: 'bold',
    fontSize: '1.5em'
  }),
  progressHeight: () => ({
    height: '15px'
  }),
  buy: () => ({
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiGrid': {
      flexBasis: 'initial !important'
    }
  }),
  gridFix: () => ({
    justifyContent: 'center',
    '& >div': {
      flexBasis: 'initial !important'
    }

  }),
  prev: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' space-between',
    width: '100%'
  }),
  helperBar: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }),
  leadFormHelperBar: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    width: '100%'
  }),
  backPage: () => ({
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center'
  }),
  singIncard: () => ({
    width: '250px',
    height: '200px',
    display: 'inline-block',
    textAlign: 'center',
    boxShadow: '0px 0px 9px 1px rgb(0 0 0 / 10%)',
    cursor: 'pointer',
    fontSize: '12px',
    backgroundColor: 'white',
    color: ' #000',
    borderRadius: '5px',
    transition: 'all 200ms ease-in-out',
    boxSizing: 'content-box',
    position: 'relative',
    marginTop: '20px',
    '&:hover': {
      transform: ' scale(1.1)'
    }
  }),
  cardOnSelect: () => ({
    width: '250px',
    height: '200px',
    display: 'inline-block',
    textAlign: 'center',
    boxShadow: '0px 0px 9px 1px rgb(0 0 0 / 10%)',
    cursor: 'pointer',
    fontSize: '12px',
    backgroundColor: '#E6F2FC',
    color: '#000',
    borderRadius: '5px',
    transition: 'all 200ms ease-in-out',
    boxSizing: 'content-box',
    position: 'relative',
    marginTop: '20px',
    '&:hover': {
      transform: ' scale(1.1)'
    }
  }),
  selected: () => ({
    width: '230px',
    height: '170px',
    border: '3px solid #000000',
    backgroundColor: `${theme.typography.astProgressbarBackground}`
  }),
  toggleSelected: () => ({
    backgroundColor: '#E6F2FC !important'
  }),
  richTextPara: () => ({
    fontSize: `${theme?.typography?.astBodyFontSize} !important`,
    lineHeight: '1.5',
    padding: '80px'
  }),
  nextBtn: () => ({
    position: 'absolute',
    bottom: '50px',
    color: '#fff',
    backgroundColor: '#024E43'
  }),
  cardsGrid: () => ({
    margin: '20px 0px'
  }),
  caption: () => ({
    paddingTop: '20px',
    fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  disclaimer: () => ({
    position: 'fixed',
    bottom: '20px'
  }),
  disclaimerText: () => ({
    fontSize: '1.15em',
    fontWeight: '300',
    lineHeight: '1.5'
  }),
  reward: () => ({
    textAlign: 'center',
    padding: '20px 0px'
  }),
  loading: () => ({
    paddingTop: '40px'
  }),
  cardContent: () => ({
    padding: '32px 16px'
  }),
  parentDiv: () => ({
    margin: 'auto'
  }),
  describeDropdown: () => ({
    border: 'none  !important',
    padding: '10px 0px 10px 10px !important',
    borderRadius: '0 !important',
    width: '98%',
    fontSize: '1.25em  !important',
  }),
  width98: ()=>({
    width: '98% !important'
  }),
  options:()=>({
    backgroundColor: '#f3f3f1  !important',
    color: '#383939  !important',
  }),
  buttonColor: ()=> ({
    background: 'blueviolet'
  }),
  border20Radius: ()=> ({
    borderRadius: '20px !important',
    background: 'white !important',
    color: 'black'
  }),
  border5Radius: ()=> ({
    borderRadius: '5px !important',
    background: 'blueviolet !important',
    marginLeft: '25px !important'
  }),
  divMargin: ()=> ({
    marginBottom: '20px'
  }),
  contentWidth: ()=> ({
    width: '80%',
    margin: 'auto'
  }),
  textCenter: ()=> ({
    textAlign: 'center',
    marginTop: '20px !important',
  }),
  fontArial: () => ({
    fontFamily: `${theme?.typography?.astFontFamily} !important`
  }),
  modelHeader: ()=> ({
    marginBottom: '15px'
  }),
  displayBlock: () => ({
    display: 'block !important'
  }),
  zeroPadding: ()=> ({
    padding: '0px !important',
    background: 'white',
    borderRadius: '1px !important'
  }),
  margin10: () => ({
    margin: '10px !important',
    borderRadius: '25px !important'
  }),
  zeroLeftPadding: ()=> ({
    paddingLeft: '0px !important',
    overflow: 'hidden',
    background: 'white'
  }),
  paddingBottom5: () => ({
    paddingBottom: '5px'
  }),
  select: () =>({
    '&:before': {
        borderColor: 'white',
    },
    '&:after': {
        borderColor: 'white',
    },
    '&:not(.Mui-disabled):hover::before': {
        borderColor: 'white',
    },
    '& Mui-underline*': {
      border: 'none !important',
      borderColor: 'white !important', 
    }
  }),
  textField:()=> ({
    borderColor: 'black',
    '& div fieldset': {
      borderColor: 'black !important',
    }
  })
}));
