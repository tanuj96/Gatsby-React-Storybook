import React from 'react';
import { Typography } from '@material-ui/core';
import { customStyles } from '../styles';
import '../../../styles.scss';

function Card({
  item, cardLenght, value, progress
}) {
  const classes = customStyles();
  progress((value + 1) * (100 / cardLenght));
  return (
    <section className={classes.cardSection}>
      <div className={classes.cardText}>
        <p className={classes.name}>{item.attributeText}</p>
        <Typography variant="h2">{item.quoteText.quoteText}</Typography>
      </div>
      <span className={classes.slideNumber}>
        0
        {value + 1}
        /0

        {cardLenght}
      </span>
    </section>
  );
}
export default Card;
