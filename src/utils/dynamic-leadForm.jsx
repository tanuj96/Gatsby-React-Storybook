import React from 'react';
import NoComponent from '../components/no-component';
import BuySell from '../components/leadForm-components/buying-selling';
import CustomerInfo from '../components/leadForm-components/customer-info';
import BuyLocation from '../components/leadForm-components/buy-location';
import SellLocation from '../components/leadForm-components/sell-location';
import CustomQuestion from '../components/leadForm-components/custom-question';
import ThankYou from '../components/leadForm-components/thankyou';
import ErrorPage from '../components/leadForm-components/error';

// const PageMap = {
//   'Buy Sell': BuySell
// };

const PageMap = {
  'Buy Sell': BuySell,
  'Customer Info': CustomerInfo,
  'Buy Location': BuyLocation,
  'Sell Location': SellLocation,
  'Custom Question': CustomQuestion,
  'Thank You': ThankYou,
  "Error": ErrorPage
};

export default ({screenType, ...others}) => {
  if (typeof PageMap[screenType] !== 'undefined') {
    return React.createElement(PageMap[screenType], {
      screenType,
      ...others
    });
  }
  return React.createElement(NoComponent, {
    screenType
  });
};
