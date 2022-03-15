import React from 'react';

import NoComponent from '../components/no-component';
import ConatctForm from '../components/ast-components/contact-form';
import BuySell from '../components/ast-components/buying-selling';
import LocationMap from '../components/ast-components/location-map';
import PropertyTypes from '../components/ast-components/property-types';
import PriveValue from '../components/ast-components/price-value';
import Lender from '../components/ast-components/lender';
import ThankYou from '../components/ast-components/thank-you';
import MortgageApproval from '../components/ast-components/mortgage-approval';
import RealEstateAgent from '../components/ast-components/real-estate-agent';
import SpecificDates from '../components/ast-components/specific-dates';
import LegalAgreement from '../components/ast-components/legal-agreements';
import AgentList from '../components/ast-components/agent-list';

const PageMap = {
  'Basic - Contact Info': ConatctForm,
  'Basic - Buy Sell': BuySell,
  'Buy - Location': LocationMap,
  'Sell - Location': LocationMap,
  'Basic - Location': LocationMap,
  'Sell - Property Type': PropertyTypes,
  'Buy - Property Types': PropertyTypes,
  'Buy - Price Range': PriveValue,
  'Sell - Value': PriveValue,
  'Basic - Real Estate Agent': RealEstateAgent,
  'Basic - Military Lender': Lender,
  'Basic - Mortgage Approval': MortgageApproval,
  'Basic - Specific Dates': SpecificDates,
  'Basic - Legal Agreements': LegalAgreement,
  'Buy - Agent List': AgentList,
  'Sell - Agent List': AgentList,
  'thank-you': ThankYou
};

export default (screenType, data, context) => {
  if (typeof PageMap[screenType] !== 'undefined') {
    return React.createElement(PageMap[screenType], {
      screenType,
      data,
      context
    });
  }
  return React.createElement(NoComponent, {
    screenType
  });
};
