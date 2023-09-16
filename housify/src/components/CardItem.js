import React from 'react';
import styles from '../../styles.css'; // Import your CSS styles instead of React Native styles
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
    <div className={styles.containerCardItem}>
      {/* IMAGE */}
      <img src={image} alt="User" style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <div className={styles.matchesCardItem}>
          <span className={styles.matchesTextCardItem}>
            <Icon name="heart" /> {matches}% Match!
          </span>
        </div>
      )}

      {/* NAME */}
      <span style={nameStyle}>{name}</span>

      {/* DESCRIPTION */}
      {description && (
        <span className={styles.descriptionCardItem}>{description}</span>
      )}

      {/* STATUS */}
      {status && (
        <div className={styles.status}>
          <div className={status === 'Online' ? styles.online : styles.offline} />
          <span className={styles.statusText}>{status}</span>
        </div>
      )}

      {/* ACTIONS */}
      {actions && (
        <div className={styles.actionsCardItem}>
          <button className={styles.miniButton}>
            <span className={styles.star}>
              <Icon name="star" />
            </span>
          </button>

          <button className={styles.button} onClick={onPressLeft}>
            <span className={styles.like}>
              <Icon name="like" />
            </span>
          </button>

          <button className={styles.button} onClick={onPressRight}>
            <span className={styles.dislike}>
              <Icon name="dislike" />
            </span>
          </button>

          <button className={styles.miniButton}>
            <span className={styles.flash}>
              <Icon name="flash" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
