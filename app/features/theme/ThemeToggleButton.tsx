import { useTranslation } from "react-i18next";
import { isTheme, useTheme, Theme } from "remix-themes";
import { IconButton } from "~/components/ui/icon-button";
import SunIcon from "~icons/ri/sun-line";
import MoonIcon from "~icons/ri/moon-line";
import { css } from "~/styled-system/css";

function ThemeToggleButton() {
  const [theme, setTheme] = useTheme();
  const { t } = useTranslation();

  const isDark = isTheme(theme) && theme === Theme.DARK;

  const toggle = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <IconButton
      variant="ghost"
      className={css({ "&:hover": { color: "accent.default" } })}
      title={
        isDark ? t(`themeBtn.${Theme.LIGHT}`) : t(`themeBtn.${Theme.DARK}`)
      }
      onClick={() => toggle()}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}

export default ThemeToggleButton;
