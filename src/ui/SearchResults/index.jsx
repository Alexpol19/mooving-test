import React, { useEffect, useRef } from 'react';
import styles from './index.module.sass';

const AddressItem = (props) => {
  return (
    <div className={styles.addressItem} onClick={props.onClick}>
      <p className={styles.addressName}>{props.item.name}</p>
      <p className={styles.location}>{props.item.location}</p>
    </div>
  );
}

const SearchResults = (props) => {
  const node = useRef(null);
  const handleMouseClick = (e) => {
    if (e.target !== node) {
      props.setValue('');
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseClick);
    return () => {
      document.removeEventListener('mousedown', handleMouseClick);
    };
  });
  return (
    <div className={styles.wrapper} ref={node}>
      <p className={styles.boxTitle}>PLACES</p>
      <div className={styles.boxPlaces}>
        {props.items.map(item => (
          <AddressItem key={item.id} item={item} onClick={() => props.setValue('')} />
        ))}
      </div>
      <p className={styles.boxTitle}>ADDRESSES</p>
      <div className={styles.boxAddresses}>
        {props.items.map(item => (
          <React.Fragment key={item.id}>
            {item.addresses.map(address => (
              <AddressItem key={address.id} item={address} onClick={() => props.setValue('')} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
