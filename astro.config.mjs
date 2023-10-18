import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), react()]
});