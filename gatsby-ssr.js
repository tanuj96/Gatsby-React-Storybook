/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="cartus-qumu" type="text/javascript" src="https://cartus.qumucloud.com/widgets/application.js" />
  ]);
};
