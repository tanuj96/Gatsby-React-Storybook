import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <>
    <CssBaseline />
    {element}
  </>
);
