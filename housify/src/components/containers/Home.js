import React, { useState } from 'react';
import City from '../City';
import Filters from '../Filters';
import CardItem from '../CardItem';
import '../../styles.css';
import Demo from '../../data.js';
import TinderCard from 'react-tinder-card'; // Import from react-tinder-card
import backgroundImage from '../../images/bg.png'; // Import the image as a variable

const Home = () => {
  const [stack, setStack] = useState(Demo);

  const onSwipe = () => {
    // Remove the top card from the stack
    setStack((prevStack) => prevStack.slice(1));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="containerHome">
        <div className="top">
          <City />
          <Filters />
        </div>

        <div className="card-stack">
          {stack.length > 0 && (
            <TinderCard
              key={stack[0].id}
              onSwipe={onSwipe}
              preventSwipe={['up', 'down']} // Specify the directions you want to prevent
              className="card"
            >
              <CardItem
                image={stack[0].image}
                name={stack[0].name}
                description={stack[0].description}
                matches={stack[0].match}
                actions
              />
            </TinderCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
