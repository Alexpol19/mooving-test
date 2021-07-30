import React from 'react';
import images from '../../images';
import styles from './index.module.sass';

const PropertyInfo = (props) => {
  return (
    <>
      <div className={`${styles.flex} ${styles.spacingBottom}`}>
        <span className={styles.propertyInfo}><img src={images.bedIcon} alt="bed icon" />&nbsp;&nbsp;{props.bedsCount} {props.bedsCount === 1 ? 'Bed' : 'Beds' }</span>
        <span className={`${styles.horizontalSpacing} ${styles.propertyInfo}`}><img src={images.bathIcon} alt="bath icon" />&nbsp;&nbsp;{props.bathsCount} {props.bathsCount === 1 ? 'Bath' : 'Baths' }</span>
        <span className={styles.propertyInfo}>{props.size} sq. ft.</span>
      </div>
      <p className={styles.address}>{props.address}</p>
    </>
  );
}

export default PropertyInfo;
