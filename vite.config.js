import { defineConfig } from 'vite';

// Deployed as a GitHub Pages project site at https://kpopn9420.github.io/blog/
// so the base path must be '/blog/' (otherwise built assets 404 → blank page).
// If you ever move this to the root site (repo named kpopn9420.github.io),
// change base back to '/'.
//
// Note: this project uses esbuild's automatic JSX runtime directly (no
// @vitejs/plugin-react) so it builds with the packages already installed.
// If you later add the plugin (npm i -D @vitejs/plugin-react) you can switch
// to it for React Fast Refresh during `npm run dev`.
export default defineConfig({
  base: '/blog/',
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
});
