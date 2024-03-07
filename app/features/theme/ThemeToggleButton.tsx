import { isTheme, useTheme, Theme } from "remix-themes";
import { IconButton } from "~/components/ui/icon-button";
import SunIcon from "~/icons/SunIcon";
import MoonIcon from "~/icons/MoonIcon";

function ThemeToggleButton() {
  const [theme, setTheme] = useTheme();

  const isDark = isTheme(theme) && theme === Theme.DARK;

  const toggle = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <IconButton
      variant="ghost"
      aria-label={isDark ? "Turn on the lights" : "Pull the curtain"}
      onClick={() => toggle()}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}

export default ThemeToggleButton;
