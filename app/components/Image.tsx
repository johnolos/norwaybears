import urlBuilder from "@sanity/image-url";
import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";
import { useRouteLoaderData } from "@remix-run/react";
import { css } from "~/styled-system/css";

interface Props {
  value: SanityImageSource;
  isInline: boolean;
}

function Image({ value, isInline }: Props) {
  const rootData = useRouteLoaderData("root");
  console.log(rootData);
  const { width, height } = getImageDimensions(value);
  return (
    <img
      className={css({ maxH: "350px" })}
      src={urlBuilder()
        .image(value)
        .dataset(rootData.ENV.SANITY_STUDIO_DATASET)
        .projectId(rootData.ENV.SANITY_STUDIO_PROJECT_ID)
        .fit("max")
        .auto("format")
        .format("webp")
        .url()}
      alt={value.alt ?? " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  );
}

export default Image;
