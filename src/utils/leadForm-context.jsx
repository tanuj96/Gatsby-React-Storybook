import React from 'react';

const leadFormContextValue = {};

export const LeadFormContext = React.createContext();
export const LeadFormContextDispatch = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'SERVICE_TYPE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        serviceType: action.value
      };
    }
    case 'CUSTOMER_INFO': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        customerInfo: action.value
      };
    }
    case 'BUY_LOCATION': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return action.value;
    }
    case 'SELL_LOCATION': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return action.value;
    }
    case 'CUSTOM_QUESTION': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        question: action.value.question,
        answer: action.value.answer,
        category: action.value.category
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
}

const LeadFormContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, leadFormContextValue);
  return (
    <LeadFormContext.Provider value={state}>
      <LeadFormContextDispatch.Provider value={dispatch}>
        {children}
      </LeadFormContextDispatch.Provider>
    </LeadFormContext.Provider>
  );
};

export default LeadFormContextProvider;
