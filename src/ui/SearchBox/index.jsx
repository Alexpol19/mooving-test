import React from 'react';
import BoxContainer from '../BoxContainer';
import InputBox from '../InputBox';
import SearchResults from '../SearchResults';
import styles from './index.module.sass';

const SearchBox = (props) => {
  const [value, setValue] = React.useState('');

  const onChange = (inputValue) => {
    setValue(inputValue)
    props.getPlaces(inputValue)
  }

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.opacityWrapper}>
        <BoxContainer>
          <h1 className={styles.h1}>Making moving simple</h1>
          <div className={styles.spacing} />
          <div className={styles.inputWrapper}>
            <InputBox value={value} setValue={onChange} />
            {props.items.length ? (
              <SearchResults
                setValue={onChange}
                items={props.items} />
            ) : null}
          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default SearchBox;
