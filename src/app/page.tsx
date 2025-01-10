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
import CopyConfig from '@/components/ocpyConfig';

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

  let plan = 1


  return (
    <>
    <List>
      {showSlider ? (
        <WelcomeSlider onSkip={handleSkip} onFinish={handleFinish} />
      ) : (
        <Page back={false}>

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
          <Modal
  header={<ModalHeader>Выбирите сервер</ModalHeader>}
  trigger={
  <div className='button_open_server_list'>
   <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
   <div className='cloud_and_arrow'>
    <span className='cloud_icon'><FiBarChart /></span>
    <img className='img_arrow_server_list' src="/img/arrow.png" alt="" />
    </div>
  </div>
  }
>
  <Placeholder>
  <div className='button_open_server_list server_button'>
      <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
      <div className='cloud_and_arrow'>
        <span className='cloud_icon'><FiBarChart /></span>
        </div>
  </div>
  <div className='button_open_server_list server_button'>
      <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
      <div className='cloud_and_arrow'>
        <span className='cloud_icon'><FiBarChart /></span>
        </div>
  </div>
  <div className='button_open_server_list server_button'>
      <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
      <div className='cloud_and_arrow'>
        <span className='cloud_icon'><FiBarChart /></span>
        </div>
  </div>
  <div className='button_open_server_list server_button server_button_disable'>
      <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
      <div className='cloud_and_arrow'>
      <span className='skoro_text'>скоро</span>
        <span className='cloud_icon cloud_icon_disable'><FiBarChart /></span>
        </div>
  </div>
  <div className='button_open_server_list server_button server_button_disable'>
      <div className='text_button_open_server_list'>🇫🇮 Финляндия</div> 
      <div className='cloud_and_arrow'>
      <span className='skoro_text'>скоро</span>
        <span className='cloud_icon cloud_icon_disable'><FiBarChart /></span>
        </div>
  </div>
  </Placeholder>
</Modal>

<div className='main_button'>
<div className='btn_get_config'>

</div>
</div>

<div className='config_block'>
  <h4>Ваш конфиг для подключения</h4>
  <div className='config'>
    <CopyConfig text='ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToibXlzZWN1cmVwYXNzd29yZA==@185.247.141.181:14777/?outline=1
'/>
  </div>
</div>
          <Section >
            <div>
              {plan == 1 ?
                <>
                  <Plan />
                </> :
                <>
                  {/* <PlanLink/> */}
                </>}

            </div>
          </Section>

          <Menu />
        </Page>

      )}
      </List>
    </>
  );
}
