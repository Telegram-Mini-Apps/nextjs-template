'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { Page } from '@/components/Page';
import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';
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
          <h3>Инструкция по использованию</h3>

          <div style={{ textAlign: 'center', padding: '20px' }}>
            {platform === 'unknown' ? (
              <p>Мы не смогли определить вашу платформу.</p>
            ) : (
              platform === 'windows' ? (
                <>
                  <h4>Для Windows:</h4>
                  <p>1. Перейдите на официальный сайт Outline (https://getoutline.org/) и скачайте установщик Outline Client для Windows.
                    Или нажмите на кнопку ниже для мгновенного перехода к загрузке:</p>
                  <a href={getLink()} target="_blank" rel="noopener noreferrer">
                    <button className='price_btn_main_more'>
                      {`Скачать Outline Client для ${platform.toUpperCase()}`}
                    </button>
                  </a>
                  <p>2. Скопируйте данные для подключения в буфер обмена. Просто нажав на ссылку на главном экране.</p>
                  <p>3. Откройте приложение Outline Client и нажмите на кнопку "Добавить сервер" или "+"</p>
                  <p>4. Вставьте скопированные данные.</p>
                  <p>5. Подтвердите добавление сервера и нажмите "Подключиться".</p>
                  <p>6. Убедитесь, что соединение успешно установлено (появится индикатор активности).</p>
                </>
              ) : platform === 'ios' ? (
                <>
                  <h4>Для iOS:</h4>
                  <p>1. Зайдите в App Store, найдите и установите приложение Outline Client.
                    (Если у вас уже установлено приложение, переходите к следующему шагу.)
                    Или просто нажмите на кнопку ниже, чтобы загрузить приложение:</p>
                  <a href={getLink()} target="_blank" rel="noopener noreferrer">
                    <button className='price_btn_main_more'>
                      {`Скачать Outline Client для ${platform.toUpperCase()}`}
                    </button>
                  </a>
                  <p>2. Скопируйте данные для подключения в буфер обмена. Просто нажав на ссылку на главном экране.</p>
                  <p>3. Откройте приложение Outline Client и нажмите на кнопку "Добавить сервер" или "+"</p>
                  <p>4. Вставьте скопированные данные.</p>
                  <p>5. Подтвердите добавление сервера и нажмите "Подключиться".</p>
                  <p>6. Убедитесь, что соединение успешно установлено (появится индикатор активности).</p>
                </>
              ) : platform === 'macos' ? (
                <>
                  <h4>Для macOS:</h4>
                  <p>1. Зайдите в Mac App Store, найдите и установите приложение Outline Client.
                    (Если у вас уже установлено приложение, переходите к следующему шагу.)
                    Или просто нажмите на кнопку ниже, чтобы загрузить приложение:</p>
                  <a href={getLink()} target="_blank" rel="noopener noreferrer">
                    <button className='price_btn_main_more'>
                      {`Скачать Outline Client для ${platform.toUpperCase()}`}
                    </button>
                  </a>
                  <p>2. Скопируйте данные для подключения в буфер обмена. Просто нажав на ссылку на главном экране.</p>
                  <p>3. Откройте приложение Outline Client и нажмите на кнопку "Добавить сервер" или "+"</p>
                  <p>4. Вставьте скопированные данные.</p>
                  <p>5. Подтвердите добавление сервера и нажмите "Подключиться".</p>
                  <p>6. Убедитесь, что соединение успешно установлено (появится индикатор активности).</p>
                </>
              ) : platform === 'android' ? (
                <>
                  <h4>Для Android:</h4>
                  <p>1. Откройте Google Play Store, найдите и установите приложение Outline Client.
                    (Если у вас уже установлено приложение, переходите к следующему шагу.)
                    Или просто нажмите на кнопку ниже, чтобы загрузить приложение:</p>
                  <a href={getLink()} target="_blank" rel="noopener noreferrer">
                    <button className='price_btn_main_more'>
                      {`Скачать Outline Client для ${platform.toUpperCase()}`}
                    </button>
                  </a>
                  <p>2. Скопируйте данные для подключения в буфер обмена. Просто нажав на ссылку на главном экране.</p>
                  <p>3. Откройте приложение Outline Client и нажмите на кнопку "Добавить сервер" или "+"</p>
                  <p>4. Вставьте скопированные данные.</p>
                  <p>5. Подтвердите добавление сервера и нажмите "Подключиться".</p>
                  <p>6. Убедитесь, что соединение успешно установлено (появится индикатор активности).</p>
                </>) : (
                <><p>Нам не удалось определить вашу платформу</p></>
              )
            )}

            <p>Если при подключении возникают проблемы, вы всегда можете написать нам в наш бот: <a href="https://t.me/FreeTubeVPNBot">Написать</a></p>
          </div>


        </div>
        <Menu />
      </Page>


    </>
  );
}
