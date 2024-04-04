import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useRouteLoaderData,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import PicoSanity from "picosanity";

import styles from "./index.css?url";

import { Header, Main, Footer } from "./features/layout";
import { themeSessionResolver } from "./features/theme/sessions.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import i18nServer, { localeCookie } from "./i18next.server";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SanityClientProvider } from "./providers/SanityClientProvider";
import { useTranslation } from "react-i18next";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export const loader: LoaderFunction = async ({ request, context }) => {
  const [locale, { getTheme }] = await Promise.all([
    i18nServer.getLocale(request),
    themeSessionResolver(request),
  ]);

  return json(
    {
      theme: getTheme(),
      locale,
      ENV: {
        ...context.cloudflare.env,
      },
    },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } },
  );
};

export const handle = {
  i18n: ["translation"],
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>An error happend. Reach out if it continues.</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const rootData = useRouteLoaderData<typeof loader>("root");
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  const [sanityClient] = useState(
    () =>
      new PicoSanity({
        projectId: rootData.ENV.SANITY_STUDIO_PROJECT_ID,
        dataset: rootData.ENV.SANITY_STUDIO_DATASET,
        apiVersion: "2021-03-25", // use a UTC date string
        useCdn: true,
      }),
  );
  return (
    <ThemeProvider
      specifiedTheme={rootData.theme}
      themeAction="/action/set-theme"
    >
      <SanityClientProvider client={sanityClient}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </SanityClientProvider>
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  const { t } = useTranslation();

  return (
    <html lang={data?.locale ?? "en"} data-color-mode={theme ?? "dark"}>
      <head>
        <title>{t("title")}</title>
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
