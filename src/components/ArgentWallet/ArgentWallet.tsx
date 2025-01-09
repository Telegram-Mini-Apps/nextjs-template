'use client';

import { useState, useEffect } from 'react';
import { ArgentTMA } from '@argent/tma-wallet';
import { Cell, Button } from '@telegram-apps/telegram-ui';

const argentTMA = ArgentTMA.init({
  environment: "sepolia",
  appName: "Telegram Mini App Demo",
  appTelegramUrl: "https://t.me/your_bot_name", // Replace with your Telegram bot URL
  sessionParams: {
    validityDays: 90,
    allowedMethods: []
  },
});

export function ArgentWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<any>(null);

  useEffect(() => {
    argentTMA
      .connect()
      .then((res) => {
        if (!res) {
          setIsConnected(false);
          return;
        }
        
        const { account } = res;

        if (account.getSessionStatus() !== "VALID") {
          setAccount(account);
          setIsConnected(false);
          return;
        }

        setAccount(account);
        setIsConnected(true);
      })
      .catch((err) => {
        console.error("Failed to connect", err);
      });
  }, []);

  const handleConnect = async () => {
    try {
      await argentTMA.connect();
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return (
    <Cell>
      {!isConnected ? (
        <Button onClick={handleConnect}>Connect Argent Wallet</Button>
      ) : (
        <div>
          <p>Connected Address: {account?.address}</p>
        </div>
      )}
    </Cell>
  );
} 