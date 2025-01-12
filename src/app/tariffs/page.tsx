'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';
import WelcomeSlider from '@/components/screen/Welcome';
import { FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";
import Menu from '@/components/menu';

// import tonSvg from '';

export default function Home() {
  const t = useTranslations('i18n');
  const initDataState = useSignal(initData.state);

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
        return 'https://getoutline.org/ru/get-started/#step-3';
      case 'windows':
        return 'https://getoutline.org/ru/get-started/#step-3';
      default:
        return 'https://getoutline.org';
    }
  };




  return (
    <>
      
      <Page back={true}>
      <div className='container'>
          <h3>Наши тарифы</h3>

          <div className='price_btn_block'>
            <Link className='price_btn_main' href={'/'}> <span>1 месяц</span> <span></span> <span>250 <img className='starPrice' src="/img/star.png" alt="" /></span> </Link>
            <Link className='price_btn_main' href={'/'}> <span>3 месяца</span> <span>- 10%</span>  <span>675 <img className='starPrice' src="/img/star.png" alt="" /></span> </Link>
            <Link className='price_btn_main' href={'/'}> <span>6 месяцев</span> <span>- 20%</span> <span>1200 <img className='starPrice' src="/img/star.png" alt="" /></span> </Link>
          </div>

         
          <h4>Как оплатить:</h4>
          <p>Просто выберите подходящий тариф и нажмите на него. Telegram предложит оплатить его с помощью Telegram Stars <img className='starPriceText' src="/img/star.png" alt="Telegram Stars" />. После подтверждения оплаты вы сразу получите конфигурационную ссылку.

Эту ссылку нужно скопировать, нажав на нее, а затем открыть приложение Outline Client. В приложении нажмите на кнопку «+», вставьте скопированную конфигурационную строку, и вы сможете подключиться к VPN.

Теперь вы сможете наслаждаться просмотром YouTube в качестве 4K без ограничений!</p>
          <p>Если у вас еще нет приложения Outline, вы можете скачать его, нажав на кнопку ниже. После нажатия вы будете перенаправлены в магазин приложений, соответствующий вашей платформе.</p>
          
          
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {platform === 'unknown' ? (
        <p>Your platform is not recognized. Please visit <a href="https://getoutline.org" target="_blank" rel="noopener noreferrer">getoutline.org</a>.</p>
      ) : (
        <a href={getLink()} target="_blank" rel="noopener noreferrer">
          <button className='price_btn_main_more'>
            {`Скачать Outline Client для ${platform.toUpperCase()}`}
          </button>
        </a>
      )}
    </div>

        
    </div>
        <Menu />
      </Page>


    </>
  );
}
