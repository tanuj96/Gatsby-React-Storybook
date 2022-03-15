/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Typography } from '@material-ui/core';
import { richTextStyles } from './styles';
import ThemeContext from '../../utils/theme-context';

export const RichText = ({ data }) => {
  const partnerTheme = useContext(ThemeContext);
  const classes = richTextStyles(partnerTheme);
  return (
    <Container>
      <Typography variant="body2" className={classes.richTextPara}>{documentToReactComponents(JSON.parse(data?.richText?.raw))}</Typography>
    </Container>
  );
};
