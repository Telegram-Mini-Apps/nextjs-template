const defaultLocale = "en";
const timeZone = "Europe/Amsterdam";
const locales = [defaultLocale, "ru"] as const;
const localesMap = [
  {
    key: "en",
    title: "English",
  },
  {
    key: "ru",
    title: "Русский",
  },
]

export { locales, localesMap, defaultLocale, timeZone };
