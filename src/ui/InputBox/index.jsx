import React from 'react';
import { useMediaQuery } from 'react-responsive';
import images from '../../images';
import ContainedButton from '../Buttons/ContainedButton';
import ContainedIconButton from '../Buttons/ContainedIconButton';
import styles from './index.module.sass';

const InputBox = (props) => {
  const isTablet  = useMediaQuery({ query: '(min-width: 667px)' })
  const isDesktop  = useMediaQuery({ query: '(min-width: 1025px)' })

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputWrap}>
        <input
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          type="text"
          placeholder={`Enter Address, ${isTablet ? 'Neighborhood, ' : ''} City or Post Code...`} />
      </div>
      {isDesktop ? (
        <div className={styles.btnWidth}>
          <ContainedButton
            title="Search"
            variant="red"
            startIcon={<img src={images.searchWhiteIcon} width={16.61} height={16.61} alt="searc icon" />}
            color="white" />
        </div>
      ) : (
        <ContainedIconButton
          disabledBg
          icon={<img src={images.searchRedIcon} alt="search icon" />} />
      )}
    </div>
  );
}

export default InputBox;
