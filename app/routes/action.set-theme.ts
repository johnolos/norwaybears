import { createThemeAction } from "remix-themes";
import { themeSessionResolver } from "../features/theme/sessions.server";

export const action = createThemeAction(themeSessionResolver);
