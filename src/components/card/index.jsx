import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { myStyles } from './styles';

export default function CardComponent({ data }) {
  const classes = myStyles();

  return (
    <Container>
      <div>
        <Typography variant="h2">
          {data.title}
        </Typography>
        <hr className={classes.hr} />
      </div>
      <Grid container spacing={3} className={classes.cardInner}>
        {data.subComponents.map((card) => (
          <Grid item xs={12} md={6} lg={6} key={card.id}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="h3"
                  color="textPrimary"
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {documentToReactComponents(JSON.parse(card.subText.raw))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
