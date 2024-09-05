const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
  mode: 'development', // Already avialable
  entry: {
    // index: './src/index.js',
    // another: './src/another-module.js',
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // dev server is already used in development initially
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3080,
  },
  // Code Splitting optimization - splitChunks
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
