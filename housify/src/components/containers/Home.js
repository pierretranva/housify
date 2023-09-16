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

  const onSwipe = (direction, cardIndex) => {
    if (direction === 'left') {
      // Remove the swiped card from the stack
      setStack((prevStack) => prevStack.filter((_, index) => index !== cardIndex));
    }
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
          {stack.map((item, index) => (
            <TinderCard
              key={index}
              onSwipe={(direction) => onSwipe(direction, index)}
              preventSwipe={['up', 'down']} // Specify the directions you want to prevent
              className="card"
            >
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
              />
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
