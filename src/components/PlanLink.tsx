"use client";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";



const Menu = () => {

  return (
    <>
      <div className="menu_wrap">
        <Link className="menu_btn" href={'/'}>
          <FiHome />
        </Link>
        <Link className="menu_btn" href={'/tariffs'}>

          <FiGlobe />
        </Link>
        <Link className="menu_btn" href={''}>
          <FiUser />
        </Link>
        <Link className="menu_btn" href={''}>
          <FiSettings />
        </Link>
      </div>
      <div className='mbt-70px'></div>
    </>
  );
};

export default Menu;
