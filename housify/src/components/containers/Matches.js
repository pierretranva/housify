import React from 'react';
import CardMatch from '../CardMatch.js';
import Icon from '../Icon.js';
import Demo from '../../data.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../styles.css'

const Matches = () => {
  return (
    <div className="bg">
      <div className="containerMatches" >
            <div>
              <h1 className="title">Matches</h1>
            </div>
          <div className="matchesCardItemContainer">
            <div className="CardItemHolder">

              {Demo.map((item, index) => (
                <button key={index} className="vy-card-matches">
                  <CardMatch
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
