import React from 'react';
import '../../styles.css';
import Message from '../Message.js';
import Icon from '../Icon.js';
import Demo from '../../data.js';

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
