module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this line based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: ['Calibre', 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}