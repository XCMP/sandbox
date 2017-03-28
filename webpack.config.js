const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `./js/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `/js/main.js`
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
      { from: './node_modules/jquery/dist/jquery.min.js', to: './libs/jquery.min.js' },
      { from: './css', to: './css' },
      {
        context: 'html',
        from: '**/*',
        to: './sandbox'
      },
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