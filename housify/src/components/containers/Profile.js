import React from 'react';
import './Profile.css'; // Import your CSS file for styling

import ProfileItem from '../ProfileItem';
import Icon from '../Icon';
import Demo from '../../data.js';
import bgmaybe from '../../images/bgmaybe.PNG';
import profilepic from '../../images/pfp.jpg';

const Profile = () => {
  const {
    id,
    name,
    status,
    price,
    match,
    description,
    message,
    location,
    image,
  } = Demo[0];

  return (
    <div className="bg">
      <div className="containerProfile">
        <div className="photo" style={{ backgroundImage: `url(${bgmaybe})` }}>
          {/* Profile Image */}
          <div className="profileImageContainer">
            <div className="profileImage">
              <img src={profilepic} alt="Profile" className="scaledProfileImage" />
            </div>
          </div>

          <div className="top">
            {/* <button>
              <span className="topIconLeft">
                <Icon name="chevronLeft" />
              </span>
            </button> */}

            {/* <button>
              <span className="topIconRight">
                <Icon name="optionsV" />
              </span>
            </button> */}
          </div>
        </div>
        <div id="CardItemHolder">
          <ProfileItem
            matches={match}
            name={name}
            location={location}
            id={id}
            status={status}
            price={price}
            description={description}
          />
        </div>

        <div className="actionsProfile">
          <button className="circledButton">
            <span className="iconButton">
              <Icon name="optionsH" />
            </span>
          </button>

          <button className="roundedButton">
            <span className="iconButton">
              <Icon name="chat" />
            </span>
            <span className="textButton">Start chatting</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
  