/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hawaii: {
          ocean: '#0077B6',
          deepOcean: '#023E8A',
          sky: '#48CAE4',
          sand: '#F4E8C1',
          lava: '#D62828',
          jungle: '#2D6A4F',
          sunset: '#F77F00',
          coral: '#FF6B6B',
          plumeria: '#FFB4D2',
          night: '#0A1628',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #48CAE4 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F77F00 0%, #D62828 50%, #5C0029 100%)',
        'gradient-tropical': 'linear-gradient(180deg, #48CAE4 0%, #0077B6 40%, #023E8A 100%)',
      }
    },
  },
  plugins: [],
}
