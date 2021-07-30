import React from 'react';
import images from '../../images';
import PropertyInfo from '../PropertyInfo';
import styles from './index.module.sass';

const ReviewItem = (props) => {
  const renderStars = () => {
    const stars = []; 
    for(let i=0; i<5; i++) {
      let contained = false;
      if(i<props.item.rating) {
        contained = true;
      }
      stars.push(
        <div className={styles.spacingHorizontal} key={i}>
          <img src={contained ? images.startContainedIcon : images.startOutlinedIcon} alt="star icon" width={19.6} height={18.95} />
        </div>
      )
    }
    return stars
  }

  return (
    <div className={styles.item}>
      <div className={styles.ratingBox}>
        <span className={styles.rating}>{props.item.rating}</span>
        <div className={styles.starBox}>
          {renderStars()}
        </div>
      </div>
      <div className={styles.spacingVertical}>
        <p className={styles.comment}>{props.item.comment}</p>
      </div>
      <div className={styles.titleSpacing}>
        <p className={styles.title}>{props.item.title}</p>
      </div>
      <PropertyInfo
        bedsCount={props.item.bedsCount}
        bathsCount={props.item.bathsCount}
        size={props.item.size}
        address={props.item.address} />
    </div>
  );
}

export default ReviewItem;
