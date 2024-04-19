import { classNames, type RGB as RGBType } from '@tma.js/sdk';
import type { FC } from 'react';

import styles from './RGB.module.css';

export type RGBProps = JSX.IntrinsicElements['div'] & {
  color: RGBType;
};

export const RGB: FC<RGBProps> = (props) => {
  const {
    color,
    className,
    ...rest
  } = props;

  return (
    <span {...rest} className={classNames(styles.root, className)}>
      <i className={styles.icon} style={{ backgroundColor: color }} />
      {color}
    </span>
  );
};
