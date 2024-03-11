import type { MetaFunction, LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link } from "~/components/ui/link";
import { css } from "~/styled-system/css";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "@remix-run/react";
import { eventsQuery } from "~/api/api";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
  useQueryClient,
  useQuery,
} from "@tanstack/react-query";

import PicoSanity from "picosanity";
import { useSanityClient } from "~/providers/SanityClientProvider";

export const loader: LoaderFunction = async ({ request, context }) => {
  const queryClient = new QueryClient();

  let lng = "nb";

  console.log(context);

  const client = new PicoSanity({
    projectId: context.cloudflare.env.SANITY_STUDIO_PROJECT_ID,
    dataset: context.cloudflare.env.SANITY_STUDIO_DATASET,
    apiVersion: "2021-03-25", // use a UTC date string
    useCdn: true,
  });

  await queryClient.prefetchQuery(eventsQuery(client, lng));

  return json({ dehydratedState: dehydrate(queryClient) });
};

function Events() {
  const data = useLoaderData<typeof loader>();
  const sanityClient = useSanityClient();
  const events = useQuery(eventsQuery(sanityClient, "nb"));
  console.log(events);
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={css({ fontSize: "6xl", fontWeight: "bold" })}>
        {t("about")}
      </h1>
      <ul>
        <li>
          <Link textStyle="4xl" asChild>
            <a
              target="_blank"
              href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
              rel="noreferrer"
            >
              Cloudflare Pages Docs - Remix guide
            </a>
          </Link>
        </li>
        <li>
          <Link textStyle="4xl" asChild>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </Link>
        </li>
      </ul>
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
