import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { css } from "~/styled-system/css";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "@remix-run/react";
import { eventsQuery } from "~/api/api";
import EventList from "~/components/EventList";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
  useQuery,
} from "@tanstack/react-query";

import PicoSanity from "picosanity";
import { useSanityClient } from "~/providers/SanityClientProvider";

export const loader: LoaderFunction = async ({ request, context }) => {
  const queryClient = new QueryClient();

  const client = new PicoSanity({
    projectId: context.cloudflare.env.SANITY_STUDIO_PROJECT_ID,
    dataset: context.cloudflare.env.SANITY_STUDIO_DATASET,
    apiVersion: "2021-03-25", // use a UTC date string
    useCdn: true,
  });

  await queryClient.prefetchQuery(eventsQuery(client));

  return json({ dehydratedState: dehydrate(queryClient) });
};

function Events() {
  const sanityClient = useSanityClient();
  const events = useQuery(eventsQuery(sanityClient));
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={css({ fontSize: "6xl", fontWeight: "bold" })}>
        {t("events.title")}
      </h1>
      {events.data && <EventList events={events.data} />}
    </div>
  );
}

export default function EventsRoute() {
  const { dehydratedState } = useLoaderData<typeof loader>();
  return (
    <HydrationBoundary state={dehydratedState}>
      <Events />
    </HydrationBoundary>
  );
}
