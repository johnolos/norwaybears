import { hstack } from "~/styled-system/patterns";
import { Link as RemixLink } from "@remix-run/react";
import { Link } from "~/components/ui/link";
import { useTranslation } from "react-i18next";

export const navLinks = [
  { id: "home", to: "/" },
  { id: "events", to: "/events" },
  { id: "about", to: "/about" },
] as const;

export type NavId = Pick<(typeof navLinks)[number], "id">["id"];

export function Navigation() {
  const { t } = useTranslation();
  return (
    <div className={hstack({ gap: 6 })}>
      {navLinks.map((link) => (
        <Link key={link.to} textStyle="4xl" asChild>
          <RemixLink to={link.to}>{t(`nav.${link.id}`)}</RemixLink>
        </Link>
      ))}
    </div>
  );
}
