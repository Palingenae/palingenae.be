import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), purgecss()]
});