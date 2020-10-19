module.exports = {
  apps : [{
    name: 'BBQ API',
    script: './server/bin/www',
    watch: './server',
    env: {
      PORT: 3080,
    },
    env_production: {
      PORT: 3080,
    }
  }],
};
