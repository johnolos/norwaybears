import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "~/components/ui/link";
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

export default function Index() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={css({ fontSize: "6xl", fontWeight: "bold" })}>
        {t("greeting")}
      </h1>
      <ul>
        <li>
          <Link textStyle="4xl" asChild>
            <a
              target="_blank"
              href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
              rel="noreferrer"
            >
              Cloudflare Pages Docs - Remix guide
            </a>
          </Link>
        </li>
        <li>
          <Link textStyle="4xl" asChild>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
