const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    debouncevsthrottle: `./src/html/debouncevsthrottle/js`,
    typetwice: `./src/html/typetwice/js`,
    lazyloadingimages: `./src/html/lazyloadingimages/js`,
    housecross: `./src/html/housecross/js`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./sandbox/[name]/js/[name].js`
  },
  module: {
    loaders: [
      {
        test: [ /\.js$/, /\.css$/],
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