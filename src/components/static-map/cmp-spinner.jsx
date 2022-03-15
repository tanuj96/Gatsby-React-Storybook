/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './spinner.scss';

const CmpSpinner = (props) => {
  const { cls } = props;

  return (
    <div className={`spinner-wrapper ${cls || ''}`} aria-label="loading">
      <div className="spinner" />
      <div className="spinner-bg" />
    </div>
  );
};

export default CmpSpinner;
