import { SDKProvider, DisplayGate, useBackButton, useLaunchParams } from '@tma.js/sdk-react';
import { FC, useEffect, useMemo } from 'react';
import { retrieveLaunchParams, setDebug } from '@tma.js/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useRouter as useNavigationRouter } from 'next/navigation';

import './global.css';

const Err: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An error occurred while initializing the SDK</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const Loading: FC = () => (
  <div>Application is loading</div>
);

const BackButtonManipulator: FC = () => {
  const router = useRouter();
  const { back } = useNavigationRouter();
  const bb = useBackButton();
  console.log(useLaunchParams());

  useEffect(() => {
    console.log('Mounted');
  } ,[]);

  useEffect(() => {
    if (router.pathname === '/') {
      bb.hide();
    } else {
      bb.show();
    }
  }, [router, bb]);

  useEffect(() =>  bb.on('click', back), [bb, back]);

  return null;
};

export default function CustomApp({ pageProps, Component }: AppProps) {
  const manifestUrl = useMemo(() => {
    return typeof window === 'undefined'
      ? ''
      : new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  useEffect(() => {
    if (retrieveLaunchParams().startParam === 'debug') {
      setDebug(true);
      import('eruda').then(lib => lib.default.init());
    }
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <BackButtonManipulator/>
          <Component {...pageProps}/>
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};
