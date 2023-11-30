import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-landscape': "url('/Images/mrq-in-hp-landscape.jpg')",
        'hero-image-portrait': "url('/Images/mrq-in-hp-portrait.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
