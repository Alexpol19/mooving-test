import React from 'react';
import styles from './index.module.sass';
import { TabPanel } from 'react-tabs';
import OutlinedButton from '../Buttons/OutlinedButton';
import ReactPlayer from 'react-player'
import images from '../../images';
import { useMediaQuery } from 'react-responsive';

const TabContent = ({title, description, buttonText, onButtonClick, videoLink, ...otherProps}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1025px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1440px)' })

  const getVideoHeight = () => {
    if(isMobile) return 184
    if(isTablet) return 256
    else {
      return 331
    }
  }
  return (
    <TabPanel {...otherProps}>
      <div className={`${styles.flexWrapper} ${styles.tabContent}`}>
        <div className={`${styles.flexCol} ${isMobile ? styles.order2 : ''}`}>
          <h2 className={styles.h2}>{title}</h2>
          <div className={styles.spacing32}></div>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}><OutlinedButton title={buttonText} size={isMobile ? 'medium' : 'default'} /></div>
        </div>
        <div className={`${styles.flexCol} ${isMobile ? styles.order1 : ''}`}>
          <ReactPlayer
            width="100%"
            height={getVideoHeight()}
            light
            url={videoLink}
            className={styles.videoPlayer}
            playing
            playIcon={<img src={images.playWhiteIcon} alt="play icon" />}
            controls />
        </div>
      </div>
    </TabPanel>
  );
}

TabContent.tabsRole = 'TabPanel';

export default TabContent;
