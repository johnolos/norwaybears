import { FetchQueryOptions } from "@tanstack/react-query";
import { PicoSanity } from "picosanity";

export const eventsQuery = (
  client: PicoSanity,
  lng: string,
): FetchQueryOptions => ({
  queryKey: ["events", lng],
  queryFn: (ctx) =>
    client.fetch('*[_type == "venue" && language == $language]', {
      language: lng,
    }),
});
