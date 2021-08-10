const { argv } = require('yargs');
const isDev = argv.mode === 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3.9,
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'lodash',
    '@babel/plugin-transform-runtime',
    // 'babel-plugin-styled-components',
    // '@babel/plugin-transform-react-inline-elements',
    // '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
    isDev && [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // or 'css'
      },
      'antd',
    ],
  ].filter(Boolean),
  env: {
    production: {
      // only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
    },
  },
};
