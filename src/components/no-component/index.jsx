import React from 'react';

export default function NoComponent({ component }) {
  return (
    <div>
      Component not found
      {' '}
      {component}
    </div>
  );
}
