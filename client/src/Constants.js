// Constants.js
const production = {
    url: 'http://54.224.123.42' // Replace with your production URL
  };
  const development = {
    url: 'http://localhost:8080' // Use your Flask development server URL
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;
  