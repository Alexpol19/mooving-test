import React from 'react';
import images from '../../images';
import AuthButtons from '../AuthButtons';
import Navigation from '../Navigation';
import styles from './index.module.sass';

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const [animate, setAnimate] = React.useState(false);

  const openChange = () => {
    if(open) {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
        setOpen(false)
      }, 400)
    } else {
      setOpen(true)
    }
  }
  return (
    <div>
      <button onClick={openChange} className={styles.btn}>
        <img src={open ? images.closeBlackIcon : images.burgerIcon} alt="burger icon" />
        <p className={styles.menuBtnText}>{open ? 'Close' : 'Menu'}</p>
      </button>
      {open ? (
        <div className={`${styles.select} ${animate && styles.translateUp}`}>
          <div className={styles.selectContent}>
            <Navigation />
            <AuthButtons onlyLogin />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;
