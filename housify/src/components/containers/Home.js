import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import City from '../City';
import Filters from '../Filters';
import CardItem from '../CardItem';
import '../../styles.css';
import Demo from '../../data.js';
import backgroundImage from '../../images/bg.png';

const Home = () => {
  const [stack, setStack] = useState(Demo);
  const [swiped, setSwiped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('');

  // Track card position and swipe gesture
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Rotation based on swipe distance
  const rotate = useTransform(cardX, [-300, 0, 300], [-50, 0, 50]);
  const opacity = useTransform(cardX, [-300, 0, 300], [0, 1, 0]);

  const onSwipe = (direction) => {
    // You can add logic here to handle matching or disliking
    if (direction === 'right') {
      // Handle matching (e.g., add logic to record a match)
    } else if (direction === 'left') {
      // Handle disliking (e.g., add logic to record a dislike)
    }

    // Remove the top card from the stack
    setStack((prevStack) => prevStack.slice(1));

    // Record swipe direction
    setSwipeDirection(direction);

    // Start animation
    setSwiped(true);
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

        <AnimatePresence>
          {stack.length > 0 && (
            <motion.div
              key={stack[0].id}
              className="card"
              style={{
                x: cardX,
                y: cardY,
                rotate,
                opacity,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(event, info) => {
                if (Math.abs(info.point.x) > 100) {
                  const direction = info.point.x > 0 ? 'right' : 'left';
                  onSwipe(direction);
                } else {
                  cardX.set(0);
                  cardY.set(0);
                }
              }}
              transition={{ duration: 0.2 }}
            >
              <CardItem
                image={stack[0].image}
                name={stack[0].name}
                description={stack[0].description}
                matches={stack[0].match}
                variant={true}
                actions
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="actions">
          <button className="dislike-button" onClick={handleDislike}>
            Dislike
          </button>
          <button className="heart-button" onClick={handleMatch}>
            Heart
          </button>
        </div>

        {swiped && (
          <motion.div
            className={`swipe-overlay ${swipeDirection === 'left' ? 'left' : 'right'}`}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {swipeDirection === 'left' ? 'Disliked' : 'Liked'}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;