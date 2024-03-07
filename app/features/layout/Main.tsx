import { PropsWithChildren } from "react";
import { css } from "~/styled-system/css";

function Main({ children }: PropsWithChildren) {
  return (
    <main className={css({ bg: { base: "pink", _dark: "red" } })}>
      {children}
    </main>
  );
}

export default Main;
