import React from 'react';
import  '../styles.css'; 
import Icon from './Icon';

const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // Custom styling
  const fullWidth = window.innerWidth; // Use window.innerWidth for screen width in React
  const imageStyle = {
    borderRadius: '8px',
    width: variant ? `${fullWidth / 2 - 30}px` : `${fullWidth - 80}px`,
    height: variant ? '170px' : '350px',
    margin: variant ? '0' : '20px'
  };

  const nameStyle = {
    paddingTop: variant ? '10px' : '15px',
    paddingBottom: variant ? '5px' : '7px',
    color: '#363636',
    fontSize: variant ? '15px' : '30px'
  };

  return (
    <div className="containerCardItem">
      {/* IMAGE */}
      <img src={image} alt="User" style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <div className="matchesCardItem">
          <span className="matchesTextCardItem">
            <Icon name="heart" /> {matches}% Match!
          </span>
        </div>
      )}

      {/* NAME */}
      <span style={nameStyle}>{name}</span>

      {/* DESCRIPTION */}
      {description && (
        <span className="descriptionCardItem">{description}</span>
      )}

      {/* STATUS */}
      {status && (
        <div className="status">
          <div className={status === 'Online' ? "online" : "offline"} />
          <span className="statusText">{status}</span>
        </div>
      )}

      {/* ACTIONS */}
      {actions && (
        <div className="actionsCardItem">
          <button className="miniButton">
            <span className="star">
              <Icon name="star" />
            </span>
          </button>

          <button className="button" onClick={onPressLeft}>
            <span className="like">
              <Icon name="like" />
            </span>
          </button>

          <button className="button" onClick={onPressRight}>
            <span className="dislike">
              <Icon name="dislike" />
            </span>
          </button>

          <button className="miniButton">
            <span className="flash">
              <Icon name="flash" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
