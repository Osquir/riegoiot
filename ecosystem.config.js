module.exports = {
  apps: [
    {
      script: 'npm start',
      env: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'placeholder',
        CLERK_SECRET_KEY: 'placeholder',
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: 'placeholder',
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: 'placeholder',
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: 'placeholder',
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: 'placeholder',
      },
    },
  ],

  deploy: {
    production: {
      key: 'PROYECTO-IOT.pem',
      user: 'ubuntu',
      host: '3.17.232.212',
      ref: 'origin/main',
      repo: 'git@github.com:Osquir/riegoiot.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    },
  },
};