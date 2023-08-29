import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pntHistoryLogo':"url('../public/pnthistorycardlogo.png')",
        'pnthistoryinfoLogo':"url('../public/pnthistoryinfoicon.png')",
        'pnticon01':"url('../public/pnticon01.png')",
        'pntCell':"url('../public/pntCell.png')",
      },
    },
  },
  plugins: [],
}
export default config
