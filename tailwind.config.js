module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'voyager-crimson': '#DC143C',
        'voyager-ruby': '#E74C3C',
        'voyager-violet': '#8B00FF',
        'voyager-purple': '#9B59B6',
        'voyager-dark': '#1A1A2E',
        'voyager-charcoal': '#2C2C54',
      },
    },
  },
  plugins: [],
}
