import React, { useRef, useState } from 'react';
import City from '../City';
import Filters from '../Filters';
import CardItem from '../CardItem';
import '../../styles.css';
import Demo from '../../data.js';
import TinderCard from 'react-tinder-card'; // Import from react-tinder-card
import backgroundImage from '../../images/bg.png'; // Import the image as a variable

const Home = ({ onLike }) => {
  const swiperRef = useRef(null);
  const [likedProfiles, setLikedProfiles] = useState([]);

  const onSwipe = (direction) => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.swipe('left');
      } else if (direction === 'right') {
        swiperRef.current.swipe('right');
        // Pass the liked profile to the onLike function
        onLike(Demo[likedProfiles.length]);
        setLikedProfiles([...likedProfiles, likedProfiles.length]);
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
              preventSwipe={['up', 'down']}
              ref={swiperRef}
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

        <button
          className="heart-button"
          onClick={() => onSwipe('right')}
        >
          Heart
        </button>
      </div>
    </div>
  );
};

export default Home;
