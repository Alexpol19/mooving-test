import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Portal from '../../components/Portal';
import PropertyInfo from '../PropertyInfo';
import styles from './index.module.sass';

const Item = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${props.hovered ? styles.wrapperHovered : ''} ${props.scaling ? styles.scaleDown : ''}`}
      style={{
        top: props.coords && props.coords.top ? props.coords.top : 'unset',
        left: props.coords && props.coords.left ? props.coords.left : 'unset',
      }}
      onMouseOut={props.scaleDown ? props.scaleDown : () => {}}>
      <div className={styles.imageBox}>
        <img src={props.item.imageUrl} alt={props.item.address} onMouseOver={(e) => props.scaleUp ? props.scaleUp(e) : () => {}} />
        {props.item.label ? (
          <div className={styles.labelBox}>
            <p className={styles.labelText}>{props.item.label}</p>
          </div>
        ) : null}
      </div>
      <h3 className={styles.price}>£{props.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
      <PropertyInfo
        bedsCount={props.item.bedsCount}
        bathsCount={props.item.bathsCount}
        size={props.item.size}
        address={props.item.address} />
    </div>
  )
}

const FeaturedItem = (props) => {
  const isDesktop  = useMediaQuery({ query: '(max-width: 1440px)' })
  const isTablet  = useMediaQuery({ query: '(max-width: 1024px)' })
  const [hovered, setHovered] = React.useState(false);
  const [scaling, setScaling] = React.useState(false);
  const [coords, setCoords] = React.useState({});

  const scaleDown = () => {
    setScaling(true);
    setTimeout(() => {
      setHovered(false)
      setScaling(false);
    }, 100)
  }

  const scaleUp = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      left: rect.x - (isDesktop ? 60 : 120),
      top: rect.y - (isDesktop ? 60 : 80)
    });
    setHovered(true)
  }

  return (
    <div className={styles.itemWrapper}>
      <Item item={props.item} hovered={hovered} scaling={scaling} scaleUp={(e) => !isTablet ? scaleUp(e) : () => {}} />
      {hovered ? (
        <Portal>
          <div className={styles.hovered}>
            <Item item={props.item} hovered={hovered} scaling={scaling} scaleDown={scaleDown} coords={coords} />
          </div>
        </Portal>
      ) : null}
    </div>
  );
}

export default FeaturedItem;
