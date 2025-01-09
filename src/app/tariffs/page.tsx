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
  const username = `Username: ${initDataState?.user?.username}`
  const firstname = `${initDataState?.user?.firstName}`
  const img = `${initDataState?.user?.photoUrl}`

  return (
    <>

      <Page back={true}>
        <Section>

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


        <Menu />
      </Page>


    </>
  );
}
