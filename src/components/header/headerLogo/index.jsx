/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Link } from 'gatsby';
import { myStyles } from './styles';

export default function HeaderLogo({ primaryLogo }) {
  const classes = myStyles();
  return (
    <div className={classes.HeaderLogoSection}>
      <Link to="/" role="link" tabIndex="0">
        <img src={`https:${primaryLogo.file.url}`} alt={primaryLogo?.description} className={classes.HeaderLogo} style={{ height: '80px' }} />
      </Link>
    </div>
  );
}
