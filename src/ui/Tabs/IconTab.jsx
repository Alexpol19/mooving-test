import React from 'react';
import styles from './index.module.sass';
import { Tab } from 'react-tabs';

const IconTab = (props) => {
  return (
    <Tab className={`${styles.tab} ${props.active ? styles.activeTab : ''}`}>
      <div className={styles.flexWrapper}>
        {props.img}
        <div className={styles.spacing} />
        <span className={styles.tabTitle}>{props.title}</span>
      </div>
    </Tab>
  );
}
IconTab.tabsRole = 'Tab';

export default IconTab;
