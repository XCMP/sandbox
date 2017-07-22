const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    debouncevsthrottle: `./src/modules/debouncevsthrottle/js`,
    typetwice: `./src/modules/typetwice/js`,
    lazyloadingimages: `./src/modules/lazyloadingimages/js`,
    housecross: `./src/modules/housecross/js`,
    image2base64: `./src/modules/image2base64/js`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./sandbox/[name]/js/[name].js`
  },
  module: {
    rules: [
      {
        test: [ /\.js$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({}),
    new CopyWebpackPlugin([
      { from: './src/css', to: './css' },
      {
        context: 'src/modules',
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