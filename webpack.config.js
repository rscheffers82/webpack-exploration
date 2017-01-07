// entry takes the relative path to this file
// Output needs the absolute path on the server
// making use of path.resolve() we take the absolute directory
// and make it compatible on any OS.

// Loaders are called modules in webpack 1
// This is updated in webpack 2 and go under the name loaders

// module / rules, use, loaded in from right to left, content is passed from on to the other
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
