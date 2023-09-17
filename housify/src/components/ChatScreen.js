import React, { useState, useEffect } from 'react';
import { pink } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import './ChatScreen.css';

function ChatScreen() {
  const { chatId } = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageSender, setMessageSender] = useState('You');

  const handleSend = (e) => {
    e.preventDefault();

    // Create a new message object based on user input
    const newMessage = { sender: 'You', message: input };

    // Check for specific prompts and provide responses based on chat ID
    let response = null;

    if (input.toLowerCase() === 'send pics') {
      if (chatId === '1') {
        response = { sender: 'ChatBot', message: 'No!' };
      } else if (chatId === '2') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '3') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '4') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '5') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
    }
    if (input.toLowerCase() === 'eco score?') {
      if (chatId === '1') {
        response = { sender: 'ChatBot', message: 'No!' };
      } else if (chatId === '2') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '3') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '4') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
      else if (chatId === '5') {
        response = { sender: 'ChatBot', message: 'Yes OFC!' };
      }
    }

    // Add the new message to the chat's messages
    const updatedMessages = [...messages, newMessage];

    // If there's a response, add it to the messages immediately
    if (response) {
      updatedMessages.push(response);
    }

    // Clear the input after handling
    setInput('');

    // Update the messages state with the new input
    setMessages(updatedMessages);
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED ON 07/11/2020</p>
      <p>Chat ID: {chatId}</p>
      <div className="chatScreen__messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatScreen__message ${
              message.sender === 'You' ? 'chatScreen__messageUser' : ''
            }`}
          >
            {message.sender !== 'You' && <div className="chatScreen__avatar" />}
            <p
              className={`chatScreen__paragraph ${
                message.sender === 'You' ? 'chatScreen__paragraphUser' : ''
              }`}
            >
              {message.message}
            </p>
          </div>
        ))}
      </div>
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a Message...."
          type="text"
        />
        <button
          onClick={handleSend}
          variant="contained"
          style={{ backgroundColor: pink }}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
