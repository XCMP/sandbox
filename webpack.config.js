const path = require('path');

module.exports = {
  entry: `./js/index.js`,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `main.js`
  },
  // entry: './js/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: 'main.js'
  // },
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