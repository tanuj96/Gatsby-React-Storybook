/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { themeStyles } from '../../styles';
import ThemeContext from '../../utils/theme-context';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const partnerTheme = useContext(ThemeContext);
  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);
  const globalthemClasses = themeStyles(partnerTheme);
  return (
    <div>
      {isVisible
        && (
        <div onClick={scrollToTop}>
          <Button variant="contained" className={globalthemClasses.scrollToTop}>Top</Button>
        </div>
        )}
    </div>
  );
}
