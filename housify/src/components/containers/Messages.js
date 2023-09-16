import React from 'react';
import '../../styles.css';
import Message from '../Message.js';
import Icon from '../Icon.js';
import Demo from '../../data.js';
import '../../vystyle.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Messages = () => {
  return (
    <div className="bg">
      <div className="containerMessages">
        <div>
          <div className="top">
            <h1 className="title">Messages</h1>
            <button className="vy-button">
              <MoreVertIcon></MoreVertIcon>
            </button>
          </div>

          <div>
            {Demo.map((item, index) => (
              <button key={index} className="vy-button">
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
