  import React from 'react';
  import '../../styles.css'

  import ProfileItem from '../ProfileItem';
  import Icon from '../Icon';
  import Demo from '../../data.js';

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
    image

    } = Demo[0];

    return (
      <div className="bg"> {/* Use className for styling in React */}
        <div className="containerProfile">
          <div className="photo" style={{ backgroundImage: `url(${image})` }}>
            <div className="top">
              <button>
                <span className="topIconLeft">
                  <Icon name="chevronLeft" />
                </span>
              </button>

              <button>
                <span className="topIconRight">
                  <Icon name="optionsV" />
                </span>
              </button>
            </div>
          </div>

          <ProfileItem
            matches={match}
            name={name}
            location={location}
            id={id}
            status={status}
            price={price}
            description={description}
          />

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
