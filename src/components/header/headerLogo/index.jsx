/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Link } from 'gatsby';
import { myStyles } from './styles';

export default function HeaderLogo({ primaryLogo, siteTypeLogo }) {
  const classes = myStyles();
  return (
    <div className={classes.HeaderLogoSection}>
      <Link to="/" role="link" tabIndex="0">
        <img src={`https:${primaryLogo.file.url}`} alt="Header Logo" className={classes.HeaderLogo} style={siteTypeLogo === 'rmr' ? { height: '80px' } : { height: '50px' }} />
      </Link>
    </div>
  );
}
