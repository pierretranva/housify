import React from 'react';
import  '../styles';
import Icon from './Icon';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filters = () => {
  return (
    <button className="filters topItem">
      <span className="filtersText">
        <FilterAltIcon/> Filters
      </span>
    </button>
  );
};

export default Filters;
