"use client";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FiGlobe, FiHome, FiSettings, FiUser } from "react-icons/fi";
import { Section } from "@telegram-apps/telegram-ui";



const Plan = () => {


  // Определяем платформу
  function getPlatform() {
    //@ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows/i.test(userAgent)) return 'windows';
    if (/android/i.test(userAgent)) return 'android';
    //@ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'ios';
    if (/macintosh|mac os x/i.test(userAgent)) return 'macos';
    return 'unknown';
  }

  // Открытие Outline VPN
  function openOutlineVPN() {
    const platform = getPlatform();
    const vpnLink = "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0bGFLNDBRQWFQVmNaWmxuaHk3ZmdE@185.247.141.181:14777/?outline=1";

    switch (platform) {
      case 'windows':
        window.location.href = `outline://vpn-config?data=${encodeURIComponent(vpnLink)}`;
        setTimeout(() => {
          if (confirm("Outline VPN не установлен. Хотите скачать?")) {
            window.location.href = "https://getoutline.org/ru/get-started/#step-3";
          }
        }, 2000);
        break;

      case 'macos':
        window.location.href = `outline://vpn-config?data=${encodeURIComponent(vpnLink)}`;
        setTimeout(() => {
          if (confirm("Outline VPN не установлен. Хотите скачать?")) {
            window.location.href = "https://itunes.apple.com/us/app/outline-app/id1356178125";
          }
        }, 2000);
        break;

      case 'ios':
        window.location.href = `outline://vpn-config?data=${encodeURIComponent(vpnLink)}`;
        setTimeout(() => {
          if (confirm("Outline VPN не установлен. Хотите скачать?")) {
            window.location.href = "https://itunes.apple.com/us/app/outline-app/id1356177741";
          }
        }, 2000);
        break;

      case 'android':
        window.location.href = `intent://vpn-config?data=${encodeURIComponent(vpnLink)}#Intent;scheme=outline;package=org.outline.android.client;end`;
        setTimeout(() => {
          if (confirm("Outline VPN не установлен. Хотите скачать?")) {
            window.location.href = "https://play.google.com/store/apps/details?id=org.outline.android.client";
          }
        }, 2000);
        break;

      default:
        alert("Не удалось определить вашу платформу.");
    }
  }


  return (
    <>
      <Section>
        <div>
          <h2>Ваш данные для подключения.</h2>
          <div>
            <div className="textDataConf"></div>
            <div onClick={() => openOutlineVPN()}>Тут надо нажать </div>
          </div>
        </div>
      </Section>

    </>
  );
};

export default Plan;
