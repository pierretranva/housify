import React, { useRef } from 'react';
import City from '../City';
import Filters from '../Filters';
import CardItem from '../CardItem';
import '../../styles.css';
import Demo from '../../data.js';
import TinderCard from 'react-tinder-card'; // Import from react-tinder-card
import backgroundImage from '../../images/bg.png'; // Import the image as a variable

const Home = () => {
  const swiperRef = useRef(null);

  const onSwipe = (direction) => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.swipe('left');
      } else if (direction === 'right') {
        swiperRef.current.swipe('right');
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="containerHome">
        <div className="top">
          <City />
          <Filters />
        </div>

        <div>
          {Demo.map((item, index) => (
            <TinderCard
              key={index}
              onSwipe={onSwipe}
              preventSwipe={['up', 'down']} // Specify the directions you want to prevent
              ref={(ref) => (swiperRef.current = ref)} // Assign the ref to swiperRef.current
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
