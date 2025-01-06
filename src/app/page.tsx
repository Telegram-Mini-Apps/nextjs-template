'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';
import WelcomeSlider from '@/components/screen/Welcome';

// import tonSvg from '';

export default function Home() {
  const t = useTranslations('i18n');
  const initDataState = useSignal(initData.state);
  const username = `Username: ${initDataState?.user?.username}`
  const firstname = `${initDataState?.user?.firstName}`
  const img = `${initDataState?.user?.photoUrl}`
  const description = ``

  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowSlider(true);
    }
  }, []);

  const handleSkip = () => {
    localStorage.setItem("hasVisited", "true");
    setShowSlider(false);
  };

  const handleFinish = () => {
    localStorage.setItem("hasVisited", "true");
    setShowSlider(false);
  };


  return (
    <>
      {showSlider ? (
        <WelcomeSlider onSkip={handleSkip} onFinish={handleFinish} />
      ) : (
        <Page back={false}>
          <List>
            <Section
              // header="Пользователь"
              footer="👋 Добро пожаловать в наш VPN-сервис! Мы предоставляем безопасный доступ для просмотра YouTube и социальных сетей. Благодарим за выбор!"
            >

              <Cell
                before={
                  <Image
                    src={img}
                    style={{ backgroundColor: '#007AFF' }}
                  />
                }
                subtitle={username}
              >
                {firstname}
              </Cell>

            </Section>
            <Section
              header="Тарифы:"
              footer="These pages help developer to learn more about current launch information"
            >
              <Link href="/one">
                <Cell subtitle="User data, chat information, technical data">
                  VPN - Сервис сроком на 1 месяц
                  <img width={100} src='img/star.png' alt="" />
                </Cell>
              </Link>
              <Link href="/thee">
                <Cell subtitle="Platform identifier, Mini Apps version, etc.">
                  VPN - Сервис сроком на 3 месяц. <span>Скидка -10%</span>
                </Cell>
              </Link>
              <Link href="/six">
                <Cell subtitle="Telegram application palette information">
                  VPN - Сервис сроком на 6 месяц. <span>Cкидка -20%</span>
                </Cell>
              </Link>
            </Section>
            <Section header={t('header')} footer={t('footer')}>
              <LocaleSwitcher />
            </Section>
          </List>
        </Page>

      )}
    </>
  );
}
