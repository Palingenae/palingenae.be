import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), react()],
  output: "server",
  adapter: netlify()
});