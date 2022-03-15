/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import './styles.scss';
import { navigate } from '@reach/router';
import clsx from 'clsx';
import ThemeContext from '../../../utils/theme-context';
import { themeStyles } from '../../../styles';

export default function Search() {
  const partnerTheme = useContext(ThemeContext);
  const globalthemClasses = themeStyles(partnerTheme);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    navigate(`/s?foo=${searchQuery}`);
  };

  const searchQueryFn = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <form autoComplete="off" onSubmit={handleSearch}>
        <input tabIndex="0" aria-label="Search" className="search expandright" id="search" type="search" name="s" placeholder="Search" onChange={searchQueryFn} />
        <label
          htmlFor="search"
          tabIndex="0"
          className={clsx(globalthemClasses.search, globalthemClasses.searchButton)}
          // style={{ backgroundColor: partnerTheme?.buttonStyle?.buttonBackgroundColor }}
          component="Button"
        >
          <span aria-label="search" className="mglass">&#9906;</span>
        </label>
      </form>
    </div>
  );
}
