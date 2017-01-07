// entry takes the relative path to this file
// Output needs the absolute path on the server
// making use of path.resolve() we take the absolute directory
// and make it compatible on any OS.

const path = require('path');

config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js';
  }
};

module.exports = config;
