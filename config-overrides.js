const path = require('path');

module.exports = function override(config) {
  const resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'Components': path.resolve(__dirname, 'src/components'),
      'Scopes': path.resolve(__dirname, 'src/scopes'),
      'Redux': path.resolve(__dirname, 'src/redux')
    }
  };

  return {
    ...config,
    resolve
  };
};
