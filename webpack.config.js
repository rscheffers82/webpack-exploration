// entry takes the relative path to this file
// Output needs the absolute path on the server
// making use of path.resolve() we take the absolute directory
// and make it compatible on any OS.

// Loaders are called modules in webpack 1
// This is updated in webpack 2 and go under the name loaders

// module / rules, use, loaded in from right to left, content is passed from on to the other

// use and loader are similar, laoder is older and required because of the requirement extract-text... module has

// Plugins are working a little differently than loader.

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        // use: ['style-loader', 'css-loader'],
      //   loader: ExtractTextPlugin.extract({
      //     loader: 'css-loader'
      //   }),
      //   test: /\.css$/
      // },
        test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // 'url-loader', // as we want to load options, use the below
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
