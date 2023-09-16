import React from 'react';
import styles from '../assets/styles';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Messages = () => {
  return (
    <div className="bg">
      <div className="containerMessages">
        <div>
          <div className="top">
            <h1 className="title">Messages</h1>
            <button>
              <span className="icon">
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
