import React from 'react';
import BoxContainer from '../BoxContainer';
import styles from './index.module.sass';
import OutlinedButton from '../Buttons/OutlinedButton';
import { useMediaQuery } from 'react-responsive';
import FeaturedItem from './FeaturedItem';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const FeaturedProperties = (props) => {
  const isDesktop  = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <div className={styles.featuredWrapper}>
      <BoxContainer>
        <div className={styles.flexWrapper}>
          {isDesktop ? (<h2>Featured Properties</h2>) : (<h3>Featured Properties</h3>)}
          {isDesktop ? (
            <div className={styles.btnContainer}>
              <OutlinedButton title="More Properties" size={!isDesktop ? 'medium' : 'default'} />
            </div>
          ) : null}
        </div>
      </BoxContainer>
      <div className={`${styles.spacingTop}`}>
        <Swiper
          navigation
          slidesPerView={'auto'}
          allowTouchMove={true}
        >
          {props.items.length ? props.items.map((item, i) => (
            <SwiperSlide key={item.id} className={`${styles.slide} ${i=== 0 ? styles.bigMargin : ''}`}>
              <FeaturedItem item={item} />
            </SwiperSlide>
          )) : null}
        </Swiper>
      </div>
      <BoxContainer>
        {!isDesktop ? (
          <div className={styles.btnContainer}>
            <OutlinedButton title="More Properties" size={!isDesktop ? 'medium' : 'default'} />
          </div>
        ) : null}
      </BoxContainer>
    </div>
  );
}

export default FeaturedProperties;
