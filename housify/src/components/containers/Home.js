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
  const [swiped, setSwiped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('');

  const onSwipe = (direction) => {
    // Remove the top card from the stack
    setStack((prevStack) => prevStack.slice(1));

    // Record swipe direction
    setSwipeDirection(direction);

    // Start animation
    setSwiped(true);

    // You can add logic here to handle matching or disliking
    if (direction === 'right') {
      // Handle matching (e.g., add logic to record a match)
    } else if (direction === 'left') {
      // Handle disliking (e.g., add logic to record a dislike)
    }
  };

  const handleMatch = () => {
    // Simulate a right swipe (match) when clicking the heart button
    onSwipe('right');
  };

  const handleDislike = () => {
    // Simulate a left swipe (dislike) when clicking the dislike button
    onSwipe('left');
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
              className={`card${swiped ? ` swiped-${swipeDirection}` : ''}`}
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

        <div className="actions">
          <button className="dislike-button" onClick={handleDislike}>
            Dislike
          </button>
          <button className="heart-button" onClick={handleMatch}>
            Heart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
