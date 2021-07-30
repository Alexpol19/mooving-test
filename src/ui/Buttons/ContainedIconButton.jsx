import React from 'react';
import styles from './index.module.sass';

const ContainedIconButton = (props) => {

  return (
    <button
      type="submit"
      className={`${styles.btn} ${styles.rounded} ${!props.disabledBg && styles.grayBg} ${props.size === "medium" && styles.mediumBtn}`}
      onClick={() => props.onClick ? props.onClick() : () => {}}
      disabled={props.disabled}>
      {props.icon}
    </button>
  );
}

export default ContainedIconButton;
