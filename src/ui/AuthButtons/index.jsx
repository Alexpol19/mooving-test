import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ContainedButton from '../Buttons/ContainedButton';
import styles from './index.module.sass';

const AuthButtons = (props) => {
  const isDesktop  = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <>
    {!props.onlyLogin ? (
      <div className={styles.flexWrapper}>
        {isDesktop ? (
          <>
            <div className={styles.btnWidth}>
              <ContainedButton title="sign in" variant="white" />
            </div>
            <div className={styles.spacing} />
          </>
        ) : null}
        <div className={styles.btnWidth}>
          <ContainedButton title="Sell" variant="blue" color="white" />
        </div>
      </div>
    ) : (
      <div className={styles.btnMedium}>
        <ContainedButton title="sign in" variant="white" size="medium" color="blackLighter" />
      </div>
    )}
    </>
  );
}

export default AuthButtons;
