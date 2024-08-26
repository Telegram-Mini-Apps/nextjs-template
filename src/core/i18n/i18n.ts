import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales } from "./config";
import { getLocale } from "./locale";
import type { Locale } from "./types";

const i18nRequestConfig = getRequestConfig(async () => {
  const locale = await getLocale() as Locale;

  return {
    locale,
    messages:
      locale === defaultLocale || !locales.includes(locale)
        ? (await import("@public/locales/en.json")).default
        : (await import(`@public/locales/${locale}.json`)).default,
  };
});

export default i18nRequestConfig;
