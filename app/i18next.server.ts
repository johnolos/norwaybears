import { RemixI18Next } from "remix-i18next/server";
import { createCookie } from "@remix-run/cloudflare";
import * as i18n from "./config/i18n";

const isProduction = process.env.NODE_ENV === "production";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: isProduction,
  httpOnly: true,
  ...(isProduction ? { secrets: ["2349023490234u902s"] } : {}),
});

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n,
  },
});
