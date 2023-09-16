import React from 'react';
import styles from '../assets/styles';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Messages = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.containerMessages}>
        <div>
          <div className={styles.top}>
            <h1 className={styles.title}>Messages</h1>
            <button>
              <span className={styles.icon}>
                <Icon name="optionsV" />
              </span>
            </button>
          </div>

          <div>
            {Demo.map((item, index) => (
              <button key={index}>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
