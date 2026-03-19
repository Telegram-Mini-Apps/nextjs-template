'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Page } from '@/components/Page';
import { Link } from '@/components/Link/Link'; 

export default function Home() {
  return (
    <Page back={false}>
      <List>
        {/* De Header met je logo */}
        <Section>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', gap: '10px' }}>
            <img 
              src="/apple-touch-icon.png.jpg" 
              alt="Unbreakable Owl Logo" 
              style={{ width: '120px', height: '120px', borderRadius: '25px', boxShadow: '0 4px 15px rgba(0,122,255,0.3)' }} 
            />
            <h1 style={{ margin: 0, fontSize: '24px' }}>Unbreakable Owl</h1>
            <p style={{ color: 'gray', margin: 0 }}>The ultimate blockchain challenge</p>
          </div>
        </Section>

        {/* Wallet Sectie */}
        <Section header="Account" footer="Connect your TON wallet to start playing.">
          <Cell>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
              <TonConnectButton />
            </div>
          </Cell>
        </Section>

        {/* Game Menu - De verbinding naar launch/page.tsx */}
        <Section header="Menu">
          <Link href="/launch">
            <Cell 
              before={<Image src="/apple-touch-icon.png.jpg" width={32} height={32} style={{borderRadius: '8px'}}/>}
              subtitle="Battle for the Nest: Online"
            >
              Start Game
            </Cell>
          </Link>
          <Cell subtitle="Global Ranking">
            Leaderboard
          </Cell>
        </Section>
      </List>
    </Page>
  );
}
