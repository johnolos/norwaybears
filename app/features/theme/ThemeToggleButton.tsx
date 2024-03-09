import { useTranslation } from "react-i18next";
import { isTheme, useTheme, Theme } from "remix-themes";
import { IconButton } from "~/components/ui/icon-button";
import SunIcon from "~/icons/SunIcon";
import MoonIcon from "~/icons/MoonIcon";

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
