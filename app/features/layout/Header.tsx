import LanguageButtons from "../language/LanguageButtons";
import { Navigation } from "../navigation";
import ThemeToggleButton from "../theme/ThemeToggleButton";
import { hstack } from "~/styled-system/patterns";
function Header() {
  return (
    <header className={hstack({ justifyContent: "space-between" })}>
      <Navigation />
      <div className={hstack({ gap: 2 })}>
        <LanguageButtons />
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
