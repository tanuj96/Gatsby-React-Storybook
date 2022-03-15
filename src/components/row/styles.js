import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  root: (row) => ({
    maxWidth: '100%',
    [theme.breakpoints.up('xs')]: {
      padding: '30px 16px',
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 24px',
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: row.alignText,
      paddingLeft: row.leftPadding !== -1 ? `${row?.leftPadding}px` : '10px',
      paddingRight: row.rightPadding !== -1 ? `${row?.rightPadding}px` : '10px',
      paddingTop: row.topPadding !== -1 ? `${row?.topPadding}px` : '10px',
      paddingBottom: row.bottomPadding !== -1 ? `${row?.bottomPadding}px` : '10px'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: row.alignText,
      paddingLeft: row.leftPadding !== -1 ? `${row?.leftPadding}px` : '10px',
      paddingRight: row.rightPadding !== -1 ? `${row?.rightPadding}px` : '10px',
      paddingTop: row.topPadding !== -1 ? `${row?.topPadding}px` : '10px',
      paddingBottom: row.bottomPadding !== -1 ? `${row?.bottomPadding}px` : '10px'
    }
  })
}));
