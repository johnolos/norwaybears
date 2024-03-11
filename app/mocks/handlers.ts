import { http } from "msw";
import venues_nb from "./venues_nb";

export const handlers = [
  http.get(
    /https:\/\/(\w+).apicdn.sanity.io\/v(\d+)-(\d+)-(\d+)\/data\/query\/(\w+)/,
    (req) => {
      console.log(req);
      const { params } = req;
      const { query } = params;
      console.log(query);

      return new Response(JSON.stringify(venues_nb), { status: 200 });
    },
  ),
];
