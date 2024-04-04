import { Theme } from "remix-themes";
import { NavId } from "~/features/navigation";
import { SocialId } from "~/content/socials";
export default {
  title: "Norway Bears",
  welcome: "Welcome! Make sure to check out events.",
  about: "This is the page where the bear club and its history is described",
  events: {
    title: "Events",
    from: "From",
    to: "To",
  },
  nav: {
    home: "Home",
    events: "Events",
    about: "About Norway Bears",
  } satisfies Record<NavId, string>,
  locale: {
    nb: "Norwegian",
    en: "English",
  },
  localeBtn: {
    selected: "{{language}} is already selected language",
    unselected: "Switch to {{language}} language",
  },
  themeBtn: {
    light: "Switch to light theme",
    dark: "Switch to dark theme",
  } satisfies Record<Theme, string>,
  socials: {
    facebook: "Link to NorwayBears on facebook",
    instagram: "Link to our instagram account",
    twitter: "Link to our twitter account",
  } satisfies Record<SocialId, string>,
};
