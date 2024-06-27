import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';

import './_assets/globals.css';
import { Root } from '@/components/Root/Root';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body>
      <Root>
        {children}
      </Root>
    </body>
    </html>
  );
}
