const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    debouncevsthrottle: `./src/js/modules/debouncevsthrottle`,
    typetwice: `./src/js/modules/typetwice`,
    lazyloadingimages: `./src/js/modules/lazyloadingimages`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/[name].js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/css', to: './css' },
      {
        context: 'src/html',
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