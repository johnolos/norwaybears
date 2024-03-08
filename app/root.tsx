import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useRouteLoaderData,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";

import styles from "./index.css?url";

import { Header, Main, Footer } from "./features/layout";
import { themeSessionResolver } from "./features/theme/sessions.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import i18nServer, { localeCookie } from "./i18next.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export const loader: LoaderFunction = async ({ request }) => {
  const [locale, { getTheme }] = await Promise.all([
    i18nServer.getLocale(request),
    themeSessionResolver(request),
  ]);

  return json(
    { theme: getTheme(), locale },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } },
  );
};

export const handle = {
  i18n: ["translation"],
};

export default function AppWithProviders() {
  const { theme } = useRouteLoaderData<typeof loader>("root");
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang={data?.locale ?? "en"} data-color-mode={theme ?? "dark"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
