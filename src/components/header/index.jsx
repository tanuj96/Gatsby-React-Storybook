/* eslint-disable max-len */
import React, { useState } from 'react';
import { Container, useMediaQuery } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { container, classOne } from './header.module.css';
import HeaderButton from './headerButton';
import HeaderMenu from './headerMenu';
import HeaderLogo from './headerLogo';
import { myStyles } from './styles';
import ContactDialogs from '../contact-us';
import Search from './search';

const theme = createTheme({
});

export default function Header({
  navigation, siteMetadata, contactForm, logout, astData, siteType, isSearchEnabled, isAst
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [toggle, setToggle] = useState(false);
  const classes = myStyles();
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Container className={classes.headerContent}>
      <div>
        {!isMobile ? (
          <div className={classes.InnerContainer}>

            <div className={classes.headerRight} style={{ flex: '1 1 auto' }}>
              <HeaderLogo primaryLogo={navigation.primaryLogoHeader} siteTypeLogo={siteType} />
              {navigation.menus && <HeaderMenu menuData={navigation.menus} />}
            </div>
            <div className={classes.headerLeft}>
              {isSearchEnabled && <Search />}
              { contactForm && (
              <ContactDialogs metadata={siteMetadata} contactFormDetails={contactForm} />
              )}
              <HeaderButton headerButton={navigation.buttonAction} logout={logout} ast={astData} siteType={siteType} isAst={isAst} />
            </div>
          </div>
        ) : (
          <div>
            <div
              className={clsx(
                classes.InnerContainer,
                classes.InnerContainerRes
              )}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                flex="auto"
              >
                <HeaderLogo primaryLogo={navigation.primaryLogoHeader} />

                <Button onClick={() => toggleMenu()}>
                  <MenuIcon />
                </Button>
              </Box>

              <div className={toggle ? container : classOne}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <div className={classes.CloseButton}>
                    <CloseIcon
                      fontSize="large"
                      onClick={() => toggleMenu()}
                    />
                  </div>

                  <div className={classes.menuWhiteSection}>
                    <HeaderButton headerButton={navigation.buttonAction} logout={logout} ast={astData} siteType={siteType} />
                    { contactForm && <ContactDialogs metadata={siteMetadata} contactFormDetails={contactForm} /> }
                    {/* <Search /> */}
                    <HeaderMenu menuData={navigation.menus} />
                  </div>
                </Box>

                <div className={toggle ? container : classOne}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <div className={classes.CloseButton}>
                      <CloseIcon
                        fontSize="large"
                        onClick={() => toggleMenu()}
                      />
                    </div>

                    <div className={classes.menuWhiteSection}>
                      <HeaderButton headerButton={navigation.buttonAction} logout={logout} ast={astData} siteType={siteType} />
                      { contactForm && <ContactDialogs metadata={siteMetadata} contactFormDetails={contactForm} /> }
                      {isSearchEnabled && <Search />}
                      {navigation.menus && <HeaderMenu menuData={navigation.menus} />}
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
