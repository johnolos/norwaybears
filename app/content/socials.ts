import IconFacebook from "~icons/ri/facebook-line";
import IconInstagram from "~icons/ri/instagram-line";
import IconTwitter from "~icons/ri/twitter-line";

import { ReactElement, SVGProps } from "react";

export type SocialId = "instagram" | "facebook" | "twitter";

interface SocialLink {
  id: SocialId;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

const socials: Array<SocialLink> = [
  {
    id: "instagram",
    href: "https://www.instagram.com/norwaybears/",
    Icon: IconInstagram,
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/NorwayBears",
    Icon: IconFacebook,
  },
  {
    id: "twitter",
    href: "https://twitter.com/norwaybears",
    Icon: IconTwitter,
  },
];

export default socials;
