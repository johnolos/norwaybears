import { createCookieSessionStorage } from "@remix-run/cloudflare";
import { createThemeSessionResolver } from "remix-themes";

const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["sidad923olasd8923jansdaps"],
    ...(isProduction && { domain: "norwaybears.com", secure: true }),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
