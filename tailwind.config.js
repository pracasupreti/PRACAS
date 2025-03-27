export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens:{
        'three':'300px',
        'four':'400px',
        'five': '500px',
        'six':'600px',
        'seven':'700px',
        'eight':'800px',
        'nine':'900px',
        'ten':'1000px',
        'ten2':'1024px',
        'elev':'1100px',
        'twl':'1200px',
        'twl2':'1280px'
      }
    },
  },
  plugins: [],
};
