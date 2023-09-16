import React, { useRef } from 'react';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import TinderCard from 'react-tinder-card'; // Import from react-tinder-card
import backgroundImage from '../assets/images/bg.png'; // Import the image as a variable

const Home = () => {
  const swiperRef = useRef(null);

  const onSwipe = (direction) => {
    if (direction === 'left') {
      swiperRef.current.swipe('left');
    } else if (direction === 'right') {
      swiperRef.current.swipe('right');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        ...styles.bg, // Add background styles here if needed
      }}
    >
      <div style={styles.containerHome}>
        <div style={styles.top}>
          <City />
          <Filters />
        </div>

        <div>
          {Demo.map((item, index) => (
            <TinderCard
              key={index}
              onSwipe={onSwipe}
              preventSwipe={['up', 'down']} // Specify the directions you want to prevent
            >
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onSwipeLeft={() => onSwipe('left')}
                onSwipeRight={() => onSwipe('right')}
              />
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
