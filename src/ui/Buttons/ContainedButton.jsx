import React from 'react';
import styles from './index.module.sass';

const ContainedButton = (props) => {

  const getClasses = () => {
    switch(props.variant) {
      case 'white': return styles.whiteBg
      case 'blue': return styles.blueBg
      case 'red': return styles.redBg
      default: return ''
    }
  }

  const getColor = () => {
    switch(props.color) {
      case 'white': return styles.whiteColor
      case 'blackLighter': return styles.blackLighterColor
      default: return ''
    }
  }
  return (
    <button
      type="submit"
      className={`${styles.btn} ${getClasses()} ${getColor()} ${props.noShadow && styles.noShadow} ${props.size === "medium" && styles.mediumBtn}`}>
      {props.startIcon ? (
        <div className={styles.flex}>
          {props.startIcon}
          <div className={styles.iconSpacing} />
          {props.title}
        </div>
      ) : props.title}
    </button>
  );
}

export default ContainedButton;
