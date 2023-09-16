import React from 'react';
import CardItem from '../CardItem.js';
import Icon from '../Icon.js';
import Demo from '../../data.js';

const Matches = () => {
  return (
    <div className="bg">
      <div className="containerMatches" >
        <div>
          <div className="top">
            <h1 className="title">Matches</h1>
            <button>
              <span className="icon">
                <Icon name="optionsV" />
              </span>
            </button>
          </div>

          <div>
            {Demo.map((item, index) => (
              <button key={index}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  variant
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
