import React from 'react';
import styles from '../styles.css'; // Import your CSS styles
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
    <div className={styles.containerProfileItem}>
      <div className={styles.matchesProfileItem}>
        <span className={styles.matchesTextProfileItem}>
          <Icon name="heart" /> {matches}% Match!
        </span>
      </div>

      <span className={styles.name}>{name}</span>

      <span className={styles.descriptionProfileItem}>
        {age} - {location}
      </span>

      <div className={styles.info}>
        <span className={styles.iconProfile}>
          <Icon name="user" />
        </span>
        <span className={styles.infoContent}>{info1}</span>
      </div>

      <div className={styles.info}>
        <span className={styles.iconProfile}>
          <Icon name="circle" />
        </span>
        <span className={styles.infoContent}>{info2}</span>
      </div>

      <div className={styles.info}>
        <span className={styles.iconProfile}>
          <Icon name="hashtag" />
        </span>
        <span className={styles.infoContent}>{info3}</span>
      </div>

      <div className={styles.info}>
        <span className={styles.iconProfile}>
          <Icon name="calendar" />
        </span>
        <span className={styles.infoContent}>{info4}</span>
      </div>
    </div>
  );
};

export default ProfileItem;
