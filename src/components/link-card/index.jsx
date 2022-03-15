import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { cardStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

const useStyles = makeStyles({
  root: {
    maxWidth: 310
  },
  media: {
    height: 140
  }
});

export default function LinkCard({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = cardStyles(partnerTheme);
  const cardClasses = useStyles();

  return (
    <Container className={classes.newContainer}>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gridNoPadding}>
          <Grid item xs={12} className={classes.gridNoPadding}>
            <Paper className={classes.paper}>
              <Typography variant="h2">{data.title}</Typography>
              <hr className={classes.hr} />
            </Paper>
          </Grid>
          {data.cards.map((card) => (
            <Grid item xs={12} sm={6} md={6} lg={4} className={classes.gridNoPadding}>
              <Paper className={classes.paper}>
                <Card className={cardClasses.root}>
                  <CardActionArea>
                    <CardMedia
                      className={cardClasses.media}
                      image={`${card.cardImage.file.url}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <CardActions>
                        {card.cardContent?.map((content) => (
                          <Link className={classes.linkLabel} to={`/${content?.link?.referenceToPage?.pageName}`} size="small" color="primary">
                            {card.cardLabel}
                          </Link>
                        ))}
                      </CardActions>
                    </CardContent>
                  </CardActionArea>

                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
