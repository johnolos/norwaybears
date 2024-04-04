import { FetchQueryOptions } from "@tanstack/react-query";
import { PicoSanity } from "picosanity";

import type { PortableTextBlock } from "@portabletext/types";

type InteralizedArray<T> = Array<{ _key: "nb" | "en"; value: T }>;

interface Venue {
  _id: string;
  _created: string;
  _updated: string;

  name: string;
  address: string;
  website: string;
  mapUrl: string;
  body: Array<PortableTextBlock>;
}

export interface Reference {
  _type: "reference";
  _ref: string;
}

export interface Event {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: "event";

  title: string;
  mainImage: {
    _type: "image";
    _ref: string;
  };
  slug: {
    current: string;
    _type: "slug";
  };
  from: string;
  to: string;

  venue: Reference;
  body: InteralizedArray<PortableTextBlock>;
}

export const eventsQuery = (client: PicoSanity): FetchQueryOptions => ({
  queryKey: ["events"],
  queryFn: () => client.fetch<Array<Event>>(`*[_type == "event"]`),
});

export const venueQuery = (client: PicoSanity): FetchQueryOptions => ({
  queryKey: ["venues"],
  queryFn: () => client.fetch('*[_type == "venue"]'),
});
