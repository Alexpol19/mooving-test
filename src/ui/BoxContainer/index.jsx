import React from 'react';
import styles from './index.module.sass';

const BoxContainer = (props) => {
  return (
    <div className={styles.w100}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
}

export default BoxContainer;
