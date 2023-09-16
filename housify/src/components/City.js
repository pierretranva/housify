import React from 'react';
import '../styles.css';
import Icon from './Icon';

const City = () => {
  return (
    <button className="city">
      <span className="cityText">
        <Icon name="marker" /> New York
      </span>
    </button>
  );
};

export default City;
