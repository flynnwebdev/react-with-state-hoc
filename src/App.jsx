import React from 'react';
import './App.css';
import ShowValue from './ShowValue'
import withState from './State';

export default withState(() => {
  return (
    <div>
      <ShowValue />
    </div>
  )
})