'use client';

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { IoPricetags } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



const Menu = () => {
  const pathname = usePathname(); // Получение текущего пути

  const getLinkClass = (path: string) => {
    return pathname === path ? 'menu_btn active' : 'menu_btn';
  };

  return (
    <>
      <div className="menu_wrap">
        <Link className={getLinkClass('/')} href={'/'}>
        <GoHomeFill />
        </Link>
        <Link className={getLinkClass('/tariffs')} href={'/tariffs'}>

        <IoPricetags />
        </Link>
        <Link className={getLinkClass('/profile')} href={'/profile'}>
        <BsPersonFill />
        </Link>
      </div>
      <div className='mbt-70px'></div>
    </>
  );
};

export default Menu;
