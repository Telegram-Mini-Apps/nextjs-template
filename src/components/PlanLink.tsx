"use client";

import "swiper/css";
import "swiper/css/pagination";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { Modal, Placeholder } from "@telegram-apps/telegram-ui";
import CitySelector from "./servers";
import CopyConfig from "./CopyConfig";
import { useAppContext } from "@/contexts/AppContexts";
import { FiBarChart } from "react-icons/fi";



const PlanLink = () => {
  const { state, setCity } = useAppContext();
  return (
    <>
     <Modal
            header={<ModalHeader>Выбирите сервер</ModalHeader>}
            
            trigger={
            <div className='button_open_server_list'>
            <div className='text_button_open_server_list'>{state.city?.flag} {state.city?.name}</div> 
            <div className='cloud_and_arrow'>
              <span className={`${state.city?.status === false ? "cloud_icon_disable" : ''} cloud_icon`}><FiBarChart /></span>
              <img className='img_arrow_server_list' src="/img/arrow.png" alt="" />
              </div>
            </div>
            }
          >
            <Placeholder>
            <CitySelector/>
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
    </>
  );
};

export default PlanLink;
