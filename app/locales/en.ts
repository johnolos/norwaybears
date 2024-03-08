import { NavId } from "../features/navigation";
export default {
  greeting: "Hello",
  about: "This is the page where the bear club and its history is described",
  nav: {
    home: "Home",
    about: "About Norway Bears",
  } satisfies Record<NavId, string>,
};
