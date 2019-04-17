const path = require('path');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, options) {
    const { alias } = config.resolve;
    alias['@UI'] = path.resolve(__dirname, 'UI/');
    alias['@components'] = path.resolve(__dirname, 'components/');
    alias['@operations'] = path.resolve(__dirname, 'operations/');
    alias['@utils'] = path.resolve(__dirname, 'utils/');

    return config
  }
});

