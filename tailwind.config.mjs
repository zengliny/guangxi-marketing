/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',
        secondary: '#F4A261',
        accent: '#2A9D8F'
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}