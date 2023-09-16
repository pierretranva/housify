  import React from 'react';
  import '../../styles.css'

  import ProfileItem from '../ProfileItem';
  import Icon from '../Icon';
  import Demo from '../../data.js';

  const Profile = () => {
    const {
      age,
      image,
      info1,
      info2,
      info3,
      info4,
      location,
      match,
      name
    } = Demo[7];

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
            age={age}
            location={location}
            info1={info1}
            info2={info2}
            info3={info3}
            info4={info4}
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
