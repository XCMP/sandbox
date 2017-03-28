const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `./js/index.js`,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `main.js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './node_modules/jquery/dist/jquery.min.js', to: './libs/jquery.min.js' }
    ], {}),
    function() {
      this.plugin('done', function() {
        console.log(`\nBuild finished at ${new Date()}`);
      })
    }
  ],
  stats: {
    colors: true
  },
};