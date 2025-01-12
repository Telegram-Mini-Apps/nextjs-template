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

// import tonSvg from '';

export default function Home() {
  const t = useTranslations('i18n');
  const initDataState = useSignal(initData.state);
  const username = `Username: ${initDataState?.user?.username}`
  const firstname = `${initDataState?.user?.firstName}`
  const img = `${initDataState?.user?.photoUrl}`
  const description = ``
  const { state, setCity } = useAppContext();
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

  let plan = 0


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
              {plan == 1 ?
                <>
                  <Plan />
                </> :
                <>
                  <PlanLink/>
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
