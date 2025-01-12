
'use client'
import React from 'react';
import { useAppContext } from '../contexts/AppContexts';
import { FiBarChart } from 'react-icons/fi';

const CitySelector: React.FC = () => {
  const { state, setCity } = useAppContext();
  const cities = [
    {id: 1, flag: '🇫🇮', name: 'Финляндия', status: true}, 
    {id: 2, flag: '🇺🇸', name: 'США', status: false}, 
    {id: 3, flag: '🇨🇿', name: 'Чехия', status: true}, 
    {id: 4, flag: '🇯🇵', name: 'Япония', status: false}, 
    {id: 5, flag: '🇳🇱', name: 'Нидерланды', status: false}, 
];

// {id: 1, flag: '/img/city/fi.gif', name: 'Финляндия', status: true}, 
// {id: 2, flag: '/img/city/us.gif', name: 'США', status: false}, 
// {id: 3, flag: '/img/city/ch.gif', name: 'Чехия', status: true}, 
// {id: 4, flag: '/img/city/ya.gif', name: 'Япония', status: false}, 
// {id: 5, flag: '/img/city/nd.gif', name: 'Нидерланды', status: false}, 

  return (
    <div>
        {cities.map((city) => (
       
           <div key={city.id}
           onClick={() => setCity(city)}
           
            className={`${city.status === false ? "server_button_disable" : ''} button_open_server_list server_button`} >
            <div  style={{
              cursor: 'pointer',
              fontWeight: state.city?.id === city.id ? 'bold' : 'normal',
            }} className='text_button_open_server_list'>{city.flag} {city.name}</div> 
            <div className='cloud_and_arrow'>
                <span className={`${city.status === false ? "cloud_icon_disable" : ''} cloud_icon`}><FiBarChart /></span>
                </div>
            </div>
        ))}
     
     
    </div>
  );
};

export default CitySelector;
