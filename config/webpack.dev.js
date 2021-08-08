const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.base');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',

  // Add hot reloading in development
  entry: [
    'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?reload=true',
    './src/index.tsx', // Start with js/app.js
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    port: 3000,
    contentBase: '../dist',
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  target: 'web',
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: './public/index.html',
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  // devtool: 'eval-cheap-module-source-map',
  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
};

module.exports = merge(common, devConfig);
