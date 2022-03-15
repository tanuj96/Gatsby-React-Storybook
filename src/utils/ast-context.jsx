import React from 'react';

const astContextValue = {};

export const AstContext = React.createContext();
export const AstContextDispatch = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'CUSTOMER_CREATE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        customerInfo: action.value
      };
    }
    case 'BUY_SELL': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        operationType: action.value
      };
    }
    case 'SET_LOCATION': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        buyCity: action.value.buyCity,
        buyState: action.value.buyState
      };
    }
    case 'PROP_TYPE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        buyMinPrice: action.value.buyMinPrice,
        buyMaxPrice: action.value.buyMaxPrice
      };
    }
    case 'AMOUNT_CHANGE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        buyPropTypeCode: action.value.buyPropTypeCode
      };
    }
    case 'SET_LENDER': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        isMilitaryLenderReq: action.value.isMilitaryLenderReq
      };
    }
    case 'SET_MORTGAGE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        isPreapproved: action.value.isPreapproved
      };
    }
    case 'REAL_ESTATE': {
      localStorage.setItem('lead', JSON.stringify(action.value));
      return {
        ...state,
        isPreapproved: action.value.isPreapproved
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
}

const AstContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, astContextValue);
  return (
    <AstContext.Provider value={state}>
      <AstContextDispatch.Provider value={dispatch}>
        {children}
      </AstContextDispatch.Provider>
    </AstContext.Provider>
  );
};

export default AstContextProvider;
