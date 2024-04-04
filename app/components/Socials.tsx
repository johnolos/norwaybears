import socialLinks from "~/content/socials";
import { IconButton } from "~/components/ui/icon-button";
import { css } from "~/styled-system/css";

function Socials() {
  return (
    <div>
      {socialLinks.map(({ id, href, Icon }) => (
        <IconButton
          key={id}
          variant="ghost"
          className={css({ "&:hover": { color: "accent.default" } })}
        >
          <a href={href}>
            <Icon />
          </a>
        </IconButton>
      ))}
    </div>
  );
}

export default Socials;
