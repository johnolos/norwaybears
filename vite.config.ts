import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    Icons({ compiler: "jsx", jsx: "react" }),
    remixCloudflareDevProxy(),
    remix(),
    tsconfigPaths(),
  ],
  server: { port: 3000 },
  build: {
    target: "esnext",
  },
});
