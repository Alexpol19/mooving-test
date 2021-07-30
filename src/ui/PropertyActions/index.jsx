import React, { useState } from 'react';
import styles from './index.module.sass';
import BoxContainer from '../BoxContainer';
import { Tabs, TabList } from 'react-tabs';
import images from '../../images';
import IconTab from '../Tabs/IconTab';
import TabContent from '../Tabs/TabContent';
import { useMediaQuery } from 'react-responsive';

const PropertyActions = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1025px)' })
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <BoxContainer>
        <Tabs defaultIndex={0} onSelect={index => setTabIndex(index)}>
          <TabList>
            <div className={isMobile ? styles.fullWidth : ''}>
              <IconTab
                active={tabIndex === 0}
                img={<img src={tabIndex === 0 ? images.keysIcon : images.keysGrayIcon}
                width={isMobile ? 32 : 24}
                alt="keys icon" />}
                title="Selling a Property" />
              <IconTab
                active={tabIndex === 1}
                img={<img src={tabIndex === 1 ? images.homeIcon : images.homeGrayIcon}
                width={isMobile ? 32 : 24}
                alt="home icon" />}
                title="Buying a Property" />
            </div>
          </TabList>
          <TabContent
            title="Selling a Property"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
              sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
            buttonText="call to action"
            videoLink="https://www.youtube.com/watch?v=mW6aE7XgOi0"
            onButtonClick={() => {}} />
          <TabContent
            title="Buying a Property"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
              sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
              sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            buttonText="call to action"
            videoLink="https://www.youtube.com/watch?v=YtZZ-hxz9TI"
            onButtonClick={() => {}} />
        </Tabs>
      </BoxContainer>
    </div>
  );
}

export default PropertyActions;
