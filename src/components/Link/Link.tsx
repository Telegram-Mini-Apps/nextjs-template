import { classNames } from '@tma.js/sdk';
import { useUtils } from '@tma.js/sdk-react';
import { type FC, type MouseEventHandler, type JSX, useCallback } from 'react';
import { LinkProps as NextLinkProps, default as NextLink } from 'next/link';

import styles from './Link.module.css';

export interface LinkProps extends NextLinkProps, Omit<JSX.IntrinsicElements['a'], 'href'> {
}

export const Link: FC<LinkProps> = (props) => {
  const {
    className,
    onClick: propsOnClick,
    href,
  } = props;
  const utils = useUtils();

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    propsOnClick?.(e);

    // Compute if target path is external. In this case we would like to open link using
    // TMA method.
    let path: string;
    if (typeof href === 'string') {
      path = href;
    } else {
      const { search = '', pathname = '', hash = '' } = href;
      path = `${pathname}?${search}#${hash}`;
    }

    const targetUrl = new URL(path, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    if (isExternal) {
      e.preventDefault();
      return utils.openLink(targetUrl.toString());
    }
  }, [href, propsOnClick, utils]);

  return (
    <NextLink
      {...props}
      onClick={onClick}
      className={classNames(className, styles.root)}
    />
  );
};
