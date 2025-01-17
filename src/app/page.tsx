'use client';

import { Section, Cell, Image, List, Modal, Button, Placeholder } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import { useSignal, initData, type User } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';
import WelcomeSlider from '@/components/screen/Welcome';
import { FiBarChart, FiCloud, FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";
import Menu from '@/components/menu';
import Plan from '@/components/Plan';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import CopyConfig from '@/components/CopyConfig';
import CitySelector from '@/components/servers';
import { useAppContext } from '@/contexts/AppContexts';
import PlanLink from '@/components/PlanLink';
import { UserResponseDto } from '@/app/dto/user.dto';

// import tonSvg from '';

export default function Home() {
  const t = useTranslations('i18n');
  const initDataState = useSignal(initData.state);
  const username = `Username: ${initDataState?.user?.username}`
  const firstname = `${initDataState?.user?.firstName}`
  const img = `${initDataState?.user?.photoUrl}`
  const id = `${initDataState?.user?.id}`
  const description = ``
  const { state, setCity } = useAppContext();
  const [showSlider, setShowSlider] = useState(false);

  const [plan, setPlan] = useState(0);
  const [promotion, setPromotion] = useState('');

  const usName = `${initDataState?.user?.username}`

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowSlider(true);
    }

    findUser(firstname, id, usName)
  }, [firstname, id, usName]);

  const handleSkip = () => {
    localStorage.setItem("hasVisited", "true");
    setShowSlider(false);
  };

  const handleFinish = () => {
    localStorage.setItem("hasVisited", "true");
    setShowSlider(false);
  };



  // Пример создания нового пользователя
  const createUser = async (name: string, userId: string, userName: string, promotion: string) => {
    const response = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, userId: userId, userName: userName, promotion: "new" }),
    });
    const data = await response.json();
    setPlan(data.tariff)
    setPromotion(data.promotion)
    console.log(data);
  };

  const findUser = async (name: string, userId: string, userName: string) => {
    console.log(userId)
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Преобразование ответа в объект
      console.log("User data:", data);
      setPlan(data.tariff)
      setPromotion(data.promotion)

      // return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error) {
        console.log("попали")
        createUser(name, userId, userName, '')
      } else {
        console.log("yt попали")
      }
    }
  };



  return (
    <>

      {showSlider ? (
        <WelcomeSlider onSkip={handleSkip} onFinish={handleFinish} />
      ) : (
        <>
          <div className='container'>

            <div className='mt-20'></div>
            <Page back={false}>

              <div>
                {plan == 0 ?
                  <>
                    <Plan data={promotion} />
                  </> :
                  <>
                    <PlanLink />
                  </>}

              </div>



            </Page>

          </div>
          <Menu />
        </>
      )}

    </>
  );
}
