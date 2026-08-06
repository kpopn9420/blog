import { defineConfig } from 'vite';

// If you deploy to https://kpopn9420.github.io/blog/ set base to '/blog/'.
// If you deploy to the root https://kpopn9420.github.io/ leave it as '/'.
//
// Note: this project uses esbuild's automatic JSX runtime directly (no
// @vitejs/plugin-react) so it builds with the packages already installed.
// If you later add the plugin (npm i -D @vitejs/plugin-react) you can switch
// to it for React Fast Refresh during `npm run dev`.
export default defineConfig({
  base: '/',
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
});
