const { merge } = require('webpack-merge');
const prodConfig = require('./webpack.prod');

/** @type {import('webpack').Configuration} */
const deployConfig = {
  output: {
    publicPath: '/webpack-react-ts/',
  },
};

module.exports = merge(prodConfig, deployConfig);
