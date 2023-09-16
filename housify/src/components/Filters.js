import React from 'react';
import '../styles.css';
import Icon from './Icon';

const Filters = () => {
  return (
    <button className="filters">
      <span className="filtersText">
        <Icon name="filter" /> Filters
      </span>
    </button>
  );
};

export default Filters;
