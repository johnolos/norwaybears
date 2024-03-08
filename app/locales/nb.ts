import { NavId } from "../features/navigation";
export default {
  greeting: "Heisann",
  about: "Dette er siden hvor bamseklubben og dens historie er beskrevet",
  nav: {
    home: "Hjem",
    about: "Om bamseklubben",
  } satisfies Record<NavId, string>,
};
