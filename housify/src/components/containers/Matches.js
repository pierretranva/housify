import React from 'react';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Matches = () => {
  return (
    <div className="bg" style="bg">
      <div className="containerMatches" style="containerMatches">
        <div>
          <div style="top">
            <h1 style="title">Matches</h1>
            <button>
              <span style="icon">
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
