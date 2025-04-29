//use server is required
"use server";

import { cookies } from "next/headers";

import { defaultLocale } from "./config";
import type { Locale } from "./types";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

const getLocale = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
};

const setLocale = async (locale?: string) => {
  (await cookies()).set(COOKIE_NAME, (locale as Locale) || defaultLocale);
};

export { getLocale, setLocale };
