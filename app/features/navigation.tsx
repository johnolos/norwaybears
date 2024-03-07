import { hstack } from "~/styled-system/patterns";
import { Link as RemixLink } from "@remix-run/react";
import { Link } from "~/components/ui/link";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Contact", to: "/contact" },
];

export function Navigation() {
  return (
    <div className={hstack({ gap: 6 })}>
      {navLinks.map((link) => (
        <Link key={link.to} textStyle="4xl" asChild>
          <RemixLink to={link.to}>{link.title}</RemixLink>
        </Link>
      ))}
    </div>
  );
}
