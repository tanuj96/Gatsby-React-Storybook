import React, { useContext } from 'react';
import { footerStyles } from './styles';
import ThemeContext from '../../utils/theme-context';
import DynamicComponent from '../../utils/dynamic-component';

export default function Footer({ footer }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = footerStyles(partnerTheme);
  return (
    <footer className={classes.footerContainer}>
      {DynamicComponent(footer?.footerContainer?.sys?.contentType?.sys?.id, footer.footerContainer)}
    </footer>
  );
}
