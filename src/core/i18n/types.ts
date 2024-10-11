import type { locales } from "./config";

type Locale = (typeof locales)[number];

export type { Locale };
