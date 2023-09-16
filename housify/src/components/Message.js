import React from 'react';
// import styles from '../styles.css'; // Import your CSS styles instead of React Native styles
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const Message = ({ image, lastMessage, name }) => {
  return (
          <ListItem button key={image}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={image} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={lastMessage} />
          </ListItem>
  );
}



export default Message;
