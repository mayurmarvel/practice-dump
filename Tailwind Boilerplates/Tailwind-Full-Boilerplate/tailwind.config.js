module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
