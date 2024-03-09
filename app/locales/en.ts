import { Theme } from "remix-themes";
import { NavId } from "../features/navigation";
export default {
  greeting: "Hello",
  about: "This is the page where the bear club and its history is described",
  nav: {
    home: "Home",
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
};
