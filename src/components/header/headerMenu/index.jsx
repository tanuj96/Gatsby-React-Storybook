/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import { createTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { myStyles } from './styles';
import '../../../styles.scss';

export default function Links({ menuData }) {
  const classes = myStyles();
  const [anchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = createTheme({});
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Typography className={classes.root}>

      <>
        { (!isMobile)
          ? (
            <>
              <nav>
                <ul className="menu-item">
                  {menuData?.map((menuItem) => {
                    const isNewTab = !menuItem.isInternalLink && menuItem?.menuLink?.link?.openInANewTab ? 'blank' : '';
                    return (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                      <li key={menuItem.id}>
                        <Link
                          key={menuItem.id}
                          target={isNewTab}
                          to={!menuItem.isInternalLink ? `${menuItem?.menuLink?.link?.url}` : `/${menuItem.menuLink.link.referenceToPage.pageName}`}
                          color="textPrimary"
                          className={`${classes.links} linksClass `}
                          open={open}
                          activeClassName="active"

                        >
                          {menuItem.menuLabel}
                          {' '}
                          <span className="arrow">{menuItem.menuItems != null && <ChevronRightIcon />}</span>
                          {menuItem.menuItems
                          && (
                          <ul className="sub-menu">

                            {menuItem.menuItems != null && menuItem.menuItems.map((_item) => (
                              <li
                                key={_item.id}
                              >
                                <Link
                                  to={`/${_item?.link?.referenceToPage?.pageName}`}
                                  target={isNewTab}
                                  color="textPrimary"
                                  activeClassName="active"
                                  tabIndex="0"
                                  component="button"
                                >
                                  {_item.label}
                                </Link>

                              </li>
                            ))}
                          </ul>
                          )}
                        </Link>

                      </li>
                    );
                  })}

                </ul>

              </nav>

            </>
          )
          : (
            <>
              {menuData?.map((menuItem) => {
                const isNewTab = !menuItem.isInternalLink && menuItem?.menuLink?.link?.openInANewTab ? 'blank' : '';
                return (
                  <Accordion className={classes.accordian} key={menuItem.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      aria-label={menuItem.menuLabel}
                      id="panel1a-header"
                      activeClassName="active"
                      className={classes.accordionSummary}
                    >
                      <Typography className={classes.heading}>
                        <Link activeClassName="active" className={classes.anchorLinks} onClick={(event) => event.stopPropagation()} target={isNewTab} to={!menuItem.isInternalLink ? `${menuItem?.menuLink?.link?.url}` : `/${menuItem.menuLink.link.referenceToPage.pageName}`} rel="noreferrer">{menuItem.menuLabel}</Link>

                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.subLink}>
                      {menuItem.menuItems != null && menuItem.menuItems.map((item, index) => (
                        <Link to={`/${item?.link?.referenceToPage?.pageName}`} className={classes.linkItem} activeClassName="active" key={index}>{item.label}</Link>
                      ))}

                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </>
          )}
      </>

    </Typography>
  );
}
