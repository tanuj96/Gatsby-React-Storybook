/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Container, useMediaQuery } from '@material-ui/core';
import { myStyles } from './styles';
// eslint-disable-next-line import/no-cycle
import DynamicComponent from '../../utils/dynamic-component';
import ThemeContext from '../../utils/theme-context';

function TabPanel(props) {
  const {
    children, value, index
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tabpanel-${index}`}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function TabContainer({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = myStyles(partnerTheme);
  const mediumViewport = useMediaQuery('(min-width:1025px)');
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let direction = 'horizontal';
  if (data.tabType === 'Vertical' && mediumViewport) {
    direction = 'vertical';
  } else if (data.tabType === 'Horizontal') {
    direction = 'horizontal';
  }

  const getColumn = (tab, id) => {
    if (id === 'imageWithText2') {
      if (tab.length === 1) {
        return 12;
      }
      if (tab.length === 2) {
        return 6;
      }

      return 4;
    }

    return 12;
  };
  const getColumnMD = (tab, id) => {
    if (id === 'imageWithText2') {
      if (tab.length === 1) {
        return 12;
      }

      return 6;
    }
  };

  return (
    <>
      <Container maxWidth="100%">
        <div className={data.tabType === 'Vertical' ? classes.verticalRoot : classes.root}>
          <AppBar position="static" className={data.tabType === 'Vertical' ? classes.tabbackgroundVertical : classes.tabbackground}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="white"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs"
              orientation={direction}
              selectionFollowsFocus
              className={classes.tabs}
              TabIndicatorProps={{ style: { background: data.activeTabIndicatorColor } }}
            >
              {
                    data?.tabItems?.map((tab) => <Tab label={tab.tabLabel} />)
                }

            </Tabs>
          </AppBar>
          {
            data?.tabItems?.map((tab, index) => (
              <div className={classes.tabContent}>
                <TabPanel value={value} index={index} className={classes.tabContent} role="tabpanel">
                  <Grid container>
                    { tab?.tabBody?.map((item) => (
                      <Grid item lg={getColumn(tab.tabBody, item?.sys?.contentType.sys.id)} md={getColumnMD(tab.tabBody, item?.sys?.contentType.sys.id)} sm={getColumnMD(tab.tabBody, item?.sys?.contentType.sys.id)} xs={12}>
                        {DynamicComponent(item?.sys?.contentType.sys.id, item)}
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
              </div>
            ))
        }
        </div>
      </Container>
    </>
  );
}

export default TabContainer;
