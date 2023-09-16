import React from 'react';
import'../styles.css'; // Import your CSS styles
import Icon from './Icon'; // Assuming you have a suitable icon component/library

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <div className="containerProfileItem">
      <div className="matchesProfileItem">
        <span className="matchesTextProfileItem">
          <Icon name="heart" /> {matches}% Match!
        </span>
      </div>

      <span className="name">{name}</span>

      <span className="descriptionProfileItem">
        {age} - {location}
      </span>

      <div className="info">
        <span className="iconProfile">
          <Icon name="user" />
        </span>
        <span className="infoContent">{info1}</span>
      </div>

      <div className="info">
        <span className="iconProfile">
          <Icon name="circle" />
        </span>
        <span className="infoContent">{info2}</span>
      </div>

      <div className="info">
        <span className="iconProfile">
          <Icon name="hashtag" />
        </span>
        <span className="infoContent">{info3}</span>
      </div>

      <div className="info">
        <span className="iconProfile">
          <Icon name="calendar" />
        </span>
        <span className="infoContent">{info4}</span>
      </div>
    </div>
  );
};

export default ProfileItem;
