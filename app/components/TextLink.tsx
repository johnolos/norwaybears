import { Link as RemixLink, type LinkProps } from "@remix-run/react";
import { RefAttributes } from "react";
import { Link } from "~/components/ui/link";

interface Props {
  children: string;
}

export type TextLinkProps = Props &
  LinkProps &
  RefAttributes<HTMLAnchorElement>;

export const TextLink = (props: TextLinkProps) => (
  <Link asChild>
    <RemixLink to={props.to} />
  </Link>
);
