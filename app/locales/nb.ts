import { Theme } from "remix-themes";
import { NavId } from "../features/navigation";
export default {
  greeting: "Heisann",
  about: "Dette er siden hvor bamseklubben og dens historie er beskrevet",
  nav: {
    home: "Hjem",
    events: "Arrangementer",
    about: "Om bamseklubben",
  } satisfies Record<NavId, string>,
  locale: {
    nb: "Norsk",
    en: "Engelsk",
  },
  localeBtn: {
    selected: "{{language}} er allerede valgt språk",
    unselected: "Bytt til {{language}} språkvalg",
  },
  themeBtn: {
    light: "Bytt til lyst tema",
    dark: "Bytt til mørkt tema",
  } satisfies Record<Theme, string>,
};
