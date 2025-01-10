import { useEffect, useState } from 'react';

const Plan: React.FC = () => {
  const [platform, setPlatform] = useState<string>('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
      setPlatform('android');
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/mac/.test(userAgent)) {
      setPlatform('macos');
    } else if (/win/.test(userAgent)) {
      setPlatform('windows');
    } else {
      setPlatform('unknown');
    }
  }, []);

  const getLink = () => {
    switch (platform) {
      case 'android':
        return 'https://play.google.com/store/apps/details?id=org.outline.android.client';
      case 'ios':
        return 'https://apps.apple.com/app/outline-app/id1356177741';
      case 'macos':
        return 'https://outline.org/downloads/Outline-Client.dmg';
      case 'windows':
        return 'https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe';
      default:
        return 'https://getoutline.org';
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {platform === 'unknown' ? (
        <p>Your platform is not recognized. Please visit <a href="https://getoutline.org" target="_blank" rel="noopener noreferrer">getoutline.org</a>.</p>
      ) : (
        <a href={getLink()} target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            {`Download Outline for ${platform.toUpperCase()}`}
          </button>
        </a>
      )}
    </div>
  );
};

export default Plan;
