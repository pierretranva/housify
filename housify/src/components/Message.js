import React from 'react';
import styles from '../styles.css'; // Import your CSS styles instead of React Native styles

const Message = ({ image, lastMessage, name }) => {
  return (
    <div className={styles.containerMessage}>
      <img src={image} alt="User" className={styles.avatar} />
      <div className={styles.content}>
        <span>{name}</span>
        <span className={styles.message}>{lastMessage}</span>
      </div>
    </div>
  );
};

export default Message;
