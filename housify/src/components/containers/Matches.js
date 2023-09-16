import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import Icon from '../Icon';
import Demo from '../../data.js';

const Matches = ({ likedProfiles }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Filter Demo data to display only liked profiles as matches
    const matchedProfiles = Demo.filter((item) =>
      likedProfiles.some((likedProfile) => likedProfile.id === item.id)
    );
    setMatches(matchedProfiles);
  }, [likedProfiles]);

  return (
    <div className="bg">
      <div className="containerMatches">
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
            {matches.map((item, index) => (
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
