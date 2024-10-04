import { provideAll } from '@glare-labs/tailwindcss-material-tokens';

const all = provideAll({color: {}})

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...all.getAllPlugins()
  ],
}

