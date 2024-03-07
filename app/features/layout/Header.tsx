import { Navigation } from "../navigation";
import ThemeToggleButton from "../theme/ThemeToggleButton";
import { hstack } from "~/styled-system/patterns";
function Header() {
  return (
    <header className={hstack({ justifyContent: "space-between" })}>
      <Navigation />
      <ThemeToggleButton />
    </header>
  );
}

export default Header;
