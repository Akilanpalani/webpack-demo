const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
  mode: 'development', // Already avialable
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    // dev server is already used in development initially
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3080,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
