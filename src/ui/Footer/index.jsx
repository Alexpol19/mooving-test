import React from 'react';
import BoxContainer from '../BoxContainer';
import styles from './index.module.sass';
import images from '../../images';
import ContainedButton from '../Buttons/ContainedButton';
import { store } from 'react-notifications-component';
import { useMediaQuery } from 'react-responsive';

const sidebarLinks = [
  {
    title: 'Privacy Policy',
    route: '#',
  },
  {
    title: 'Terms & Conditions',
    route: '#',
  },
  {
    title: 'Press',
    route: '#',
  },
  {
    title: 'Contact Us',
    route: '#',
  },
]

const socialLinks = [
  {
    imageUrl: images.instagram,
    route: '#',
  },
  {
    imageUrl: images.twitter,
    route: '#',
  },
  {
    imageUrl: images.facebook,
    route: '#',
  },
  {
    imageUrl: images.youtube,
    route: '#',
  },
  {
    imageUrl: images.linkedin,
    route: '#',
  },
]

const Footer = () => {
  const isTablet  = useMediaQuery({ query: '(max-width: 1023px)' })

  const [value, setValue] = React.useState('');
  const [focused, setFocus] = React.useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    if(!value) {
      showNotification('Warning', 'E-mail is required!', 'danger');
    }else {
      showNotification('Success', 'E-mail sent successful!', 'success');
      setValue('');
    }
  }

  const showNotification = (title, message, type) => {//type: "success" | "danger" | "info" | "default" | "warning"
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true
      },
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBg}>
        <BoxContainer>
          <div className={styles.flexWrapper}>
            <div className={styles.sidebar}>
              <div className={styles.logoFlex}>
                <img src={images.logoWhite} width={isTablet ? 45 : 75} height={isTablet ? 32 : 50.28} alt="white logo" />
                {isTablet ? (
                  <div className={styles.socialWrapper}>
                    {socialLinks.map(item => (
                      <div key={item.imageUrl} className={styles.socialBox}>
                        <a href={item.route}><img src={item.imageUrl} alt="social link" /></a>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className={styles.ptBig} />
              {sidebarLinks.map(item => (
                <div key={item.title} className={styles.linkBox}>
                  <a href={item.route} className={styles.link}>{item.title}</a>
                </div>
              ))}
              {!isTablet ? (<p className={styles.copyrigh}>©2021 Mooving.uk. All rights reserved.</p>) : null}
            </div>
            <div className={styles.subscribeWrapper}>
              {!isTablet ? (
                <div className={styles.socialWrapper}>
                  {socialLinks.map(item => (
                    <div key={item.imageUrl} className={styles.socialBox}>
                      <a href={item.route}><img src={item.imageUrl} alt="social link" /></a>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className={styles.titleSpacing}>
                {isTablet ? (<h3 className={styles.whiteColor}>Get the latest news</h3>) : (<h2 className={styles.whiteColor}>Get the latest news</h2>)}
              </div>
              <form onSubmit={onSubmit}>
                <div className={styles.formFlex}>
                  <div className={`${styles.inputBox} ${focused && styles.focused}`}>
                    <input
                      value={value}
                      onChange={e => setValue(e.target.value)}
                      type="text"
                      placeholder="Your email"
                      className={styles.input}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)} />
                    <div className={styles.inputLine} />
                  </div>
                  <div className={styles.btnBox}>
                    <ContainedButton title="subscribe" variant="white" noShadow />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {isTablet ? (<p className={styles.copyrigh}>©2021 Mooving.uk. All rights reserved.</p>) : null}
        </BoxContainer>
      </div>
    </div>
  );
}

export default Footer;
