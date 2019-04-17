const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, options) {
    const { alias } = config.resolve;
    // alias['@UI'] = path.resolve(__dirname, 'UI/');

    return config
  }
});

