import React from 'react';
import styles from './index.module.sass';

const Navigation = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className={styles.flexWrapper}>
      <a href="#" className={`${styles.link} ${active === 0 && styles.activeLink}`} onClick={() => setActive(0)}>market data</a>
      <a href="#" className={`${styles.link} ${active === 1 && styles.activeLink}`} onClick={() => setActive(1)}>Latest Property News</a>
      <a href="#" className={`${styles.link} ${active === 2 && styles.activeLink}`} onClick={() => setActive(2)}>Pricing</a>
      <a href="#" className={`${styles.link} ${active === 3 && styles.activeLink}`} onClick={() => setActive(3)}>faq</a>
    </div>
  );
}

export default Navigation;
