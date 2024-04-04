import type { MetaFunction } from "@remix-run/cloudflare";
import { css } from "~/styled-system/css";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function About() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={css({ fontSize: "6xl", fontWeight: "bold" })}>
        {t("about")}
      </h1>
    </div>
  );
}
