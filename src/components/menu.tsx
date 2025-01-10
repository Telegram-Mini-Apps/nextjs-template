"use client";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";



const Menu = () => {
  const vpnLink =
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0bGFLNDBRQWFQVmNaWmxuaHk3ZmdE@185.247.141.181:14777/?outline=1';

  const outlineLink = `outline://vpn-config?data=123`;
  const jj = `tg://resolve?phone=79065563553`
  return (
    <>
      <div className="menu_wrap">
        <Link className="menu_btn" href={'/'}>
          <FiHome />
        </Link>
        <Link className="menu_btn" href={'/tariffs'}>

          <FiGlobe />
        </Link>
        <Link className="menu_btn" href={outlineLink}>
          <FiUser />
        </Link>
        <Link className="menu_btn" href={jj}>
          <FiSettings />
        </Link>
      </div>
      <div className='mbt-70px'></div>
    </>
  );
};

export default Menu;
