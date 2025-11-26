import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  server: {
    port: 3000,
  },
  root: '.',
  base: '/test-gsap/',
  build: {
    cssCodeSplit: true,
  },
  plugins: [cssInjectedByJsPlugin({ relativeCSSInjection: true })],
});
