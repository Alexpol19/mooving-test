import React from 'react';
import images from '../../images';
import AuthButtons from '../AuthButtons';
import BoxContainer from '../BoxContainer';
import Navigation from '../Navigation';
import styles from './index.module.sass';
import '../../assets/breakpoints.module.scss'
import { useMediaQuery } from 'react-responsive'
import Menu from '../Menu';

const Header = () => {
  const isDesktop  = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <div className={styles.wrapper}>
      <BoxContainer>
        <div className={styles.flexWrapper}>
          <div className={styles.flexWrapper}>
            <img src={images.logoBlack} alt="logo icon" className={styles.imgLink} />
            {isDesktop ? (
                <>
                  <div className={styles.spacing} />
                  <Navigation />
                </>
            ) : null}
          </div>
          {!isDesktop ? (
            <Menu />
            ) : null}
          <AuthButtons />
        </div>
      </BoxContainer>
    </div>
  );
}

export default Header;
