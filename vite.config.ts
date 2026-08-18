import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// No `define` block for secrets here on purpose: anything listed under
// `define` gets inlined as a literal into the client bundle. The Gemini SDK
// (@google/genai) isn't used anywhere in src/ today; if it's wired up later,
// call it from a server-side endpoint only (like /api/contact) and read the
// key via `process.env.GEMINI_API_KEY` there — never via a VITE_-prefixed
// variable or a Vite `define`, both of which ship to every visitor's browser.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify — file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
