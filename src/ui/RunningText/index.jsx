import React from 'react';
import styles from './index.module.sass';
import Marquee from 'react-double-marquee';

const RunningText = (props) => {
  return (
    <div className={styles.wrapper}>
      <Marquee direction="left" childMargin={8} speed={0.1}>
        {props.items.length ? props.items.map(item => (
          <span key={item} className={styles.itemText}>
            {item}
          </span>
        )) : null}
      </Marquee>
    </div>
  );
}

export default RunningText;
