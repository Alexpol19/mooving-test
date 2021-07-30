import React from 'react';
import BoxContainer from '../BoxContainer';
import styles from './index.module.sass';
import ReviewItem from '../ReviewItem';
import images from '../../images';
import ContainedIconButton from '../Buttons/ContainedIconButton';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Navigation]);

const ReviewsAndTestimonials = (props) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })
  const [currentItem, setCurrent] = React.useState(0);
  const [swiperInst, setSwiperInst] = React.useState(null);

  const onLeftClick = () => {
    if (swiperInst) {
      const isBegin = swiperInst.isBeginning;
      if (!isBegin) {
        setCurrent(currentItem - 1);
        swiperInst.navigation.prevEl.click();
        if(swiperInst.isBeginning) {
          setCurrent(0);
        }
      }
    }
  };

  const onRightClick = () => {
    if (swiperInst) {
      const isEnd = swiperInst.isEnd;
      if (!isEnd) {
        setCurrent(currentItem + 1);
        swiperInst.navigation.nextEl.click();
        if(swiperInst.isEnd) {
          setCurrent(props.items.length - 1);
        }
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <BoxContainer>
        <div className={styles.flexWrapper}>
          {!isDesktop ? (<h3>Reviews &#38; Testimonials</h3>) : (<h2>Reviews &#38; Testimonials</h2>)}
          <div className={styles.btnContainer}>
            <ContainedIconButton
              size={!isDesktop ? 'medium' : 'default'}
              onClick={onLeftClick}
              icon={<img src={images.leftArrowIcon}
              alt="arrow icon" />}
              disabled={currentItem === 0} />
            <div className={styles.btnSpacing} />
            <ContainedIconButton
              size={!isDesktop ? 'medium' : 'default'}
              onClick={onRightClick}
              icon={<img src={images.leftArrowIcon}
              className={styles.rotate180}
              alt="arrow icon" />}
              disabled={currentItem === props.items.length - 1} />
          </div>
        </div>
      </BoxContainer>
      <div className={styles.sliderContainer}>
        <Swiper
          navigation
          slidesPerView={isTablet ? 1 : 'auto'}
          allowTouchMove={false}
          onSwiper={(swiper) => setSwiperInst(swiper)}
        >
          {props.items.length ? props.items.map((item, i) => (
            <SwiperSlide key={item.id} className={`${styles.slide} ${i=== 0 && styles.bigMargin}`}>
              <ReviewItem item={item} />
            </SwiperSlide>
          )) : null}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewsAndTestimonials;
