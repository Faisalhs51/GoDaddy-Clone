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
        'contact-gradient': 'linear-gradient(166.66deg, rgb(31, 117, 206) 4.62%, rgb(23, 121, 207) 4.62%, rgb(116, 75, 196) 86.29%)'
      },
      boxShadow: {
        'sticky': 'rgba(0, 0, 0, 0.25) 0px 2px 15px 0px'
      },
      // background: {
      // }
    },
  },
  plugins: [],
}
export default config
