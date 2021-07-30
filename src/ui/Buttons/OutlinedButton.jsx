import React from 'react';
import styles from './index.module.sass';

const OutlinedButton = (props) => {
  return (
    <button type="submit" className={`${styles.btn} ${styles.outlinedGray} ${(props.size && props.size === "medium") ? styles.mediumOutlinedBtn : ''}`}>
      {props.startIcon ? (
        <div className={styles.flex}>
          {props.startIcon}
          <div className={styles.iconSpacing} />
          {props.title}
        </div>
      ) : props.title}
    </button>
  );
}

export default OutlinedButton;
