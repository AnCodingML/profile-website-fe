module.exports = {
   apps: [
     {
       name: 'profile-website-fe',
       script: 'node_modules/vite/bin/vite.js',
       args: 'serve',
       watch: false,
       env: {
         NODE_ENV: 'development',
         PORT: 4000, // ganti dengan port yang diinginkan
       },
       env_production: {
         NODE_ENV: 'production',
         PORT: 4000, // ganti dengan port yang diinginkan
       },
     },
   ],
 };