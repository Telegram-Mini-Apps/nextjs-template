"use client"

import { Select } from "@telegram-apps/telegram-ui";
import { useLocale } from "next-intl";
import { FC } from "react";

import { localesMap } from "@/core/i18n/config";
import { setLocale } from "@/core/i18n/locale";
import { Locale } from "@/core/i18n/types";

export const LocaleSwitcher: FC = () => {
  const locale = useLocale();

  const onChange = (value: string) => {
    const locale = value as Locale;
    setLocale(locale);
  }

  return (
    <Select value={locale} onChange={({target}) => onChange(target.value)}>
      {localesMap.map((locale) => (
        <option key={locale.key} value={locale.key}>{locale.title}</option>
      ))}
    </Select>
  );
}
