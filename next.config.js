/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
  // .env load
 
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  env : {
    BASE_API_URL: process.env.BASE_API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  images: {
    domains: ['m.shinsegaepoint.com','storage.googleapis.com'],
  },
})