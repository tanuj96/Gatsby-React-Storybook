import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import { myStyles, BootstrapButton } from './styles';
import { themeStyles } from '../../../styles';
import ThemeContext from '../../../utils/theme-context';

export default function HeaderButton({
  headerButton, isAst
}) {
  const partnerTheme = useContext(ThemeContext);
  const classes = myStyles();
  const globalthemClasses = themeStyles(partnerTheme);
  const navigateToPage = (path) => [
    navigate(path)
  ];
  const variantVal = partnerTheme?.buttonStyle?.buttonType === 'contained' || partnerTheme?.buttonStyle?.buttonType === 'outlined' || partnerTheme?.buttonStyle?.buttonType === 'text' ? partnerTheme?.buttonStyle?.buttonType : 'contained';
  let showModal;
  if (isAst) {
    showModal = '/signup';
  } else {
    showModal = '/customer-info';
  }
  return (
    <div className={classes.HeaderButtonRes}>
      <Link to={showModal} tabindex="-1">
        <BootstrapButton
            // variant={partnerTheme?.buttonStyle?.buttonType || 'contained'}
          variant={variantVal}
          color="primary"
          disableRipple
          className={globalthemClasses.button}
          onClick={() => {
            navigateToPage(showModal);
          }}
        >
          {headerButton.label}
        </BootstrapButton>
      </Link>
    </div>
  );
}
