
import React, { useState } from 'react';
import { GiClick } from 'react-icons/gi';

type CopyTextProps = {
  text: string; // Текст для копирования
};

const CopyConfig: React.FC<CopyTextProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Уведомление сбрасывается через 2 секунды
    } catch (error) {
      console.error('Ошибка копирования:', error);
    }
  };

  return (
    <div className='config_text_wrapper'>
    <p className='text_config'
      style={{
        cursor: "pointer",
        color: copied ? "green" : "#323069",

        textDecoration: "underline",
      }}
      onClick={handleCopy}
    >
      {copied ? "Скопировано!" : text}
    </p>
    <span className='finger'><GiClick /></span>
  </div>
  );
};

export default CopyConfig;
