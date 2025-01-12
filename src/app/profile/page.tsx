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
import CopyConfig from "@/components/CopyConfig";

// import tonSvg from '';

export default function Home() {
  const initDataState = useSignal(initData.state);
  const username = `${initDataState?.user?.username}`
  const firstname = `${initDataState?.user?.firstName}`
  const img = `${initDataState?.user?.photoUrl}`
  const id = `${initDataState?.user?.id}`




  return (
    <>
      
      <Page back={true}>
        <div className='container'>

        <div className='profileWrap'>
            <div className='profileImg' style={{backgroundImage: `url(${img})`}}>

            </div>
            <div>
                <p>ID: {id}</p>
                <p>{firstname}</p>
                <p>{username}</p>
            </div>
        </div>
        <div>
            <h4>Активный конфиг</h4>
            <p>Дата окончания: <span className='dataEnd'>20.03.2025 23:33</span></p>
            <div className='config'>
              <CopyConfig text='ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToibXlzZWN1cmVwYXNzd29yZA==@185.247.141.181:14777/?outline=1'/>
              </div>
        </div>
        <div>
            <h4>История ваших покупок:</h4>
            <div className='historyBlock'>
                <p className='historyText'>Покупка "1 месяц" - 20.01.2024 - 23:34</p>
                <p className='historyText'>Покупка "3 месяц" - 20.09.2024 - 23:34</p>
                <p className='historyText'>Покупка "1 месяц" - 20.12.2024 - 23:34</p>
            </div>
        </div>

          

        
        </div>
        <Menu />
      </Page>


    </>
  );
}
