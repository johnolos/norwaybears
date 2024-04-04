import { Theme } from "remix-themes";
import { NavId } from "~/features/navigation";
import { SocialId } from "~/content/socials";
export default {
  title: "Den Norske Bamseklubben",
  welcome: "Heisann! Sjekk ut eventer når du har tid.",
  about: "Dette er siden hvor bamseklubben og dens historie er beskrevet",
  events: {
    title: "Arrangementer",
    from: "Fra",
    to: "Til",
  },
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
  socials: {
    facebook: "Den Norske Bamseklubben på facebook",
    instagram: "Lenke til bamseklubben på instagram",
    twitter: "Lenke til bamseklubben på twitter",
  } satisfies Record<SocialId, string>,
};
