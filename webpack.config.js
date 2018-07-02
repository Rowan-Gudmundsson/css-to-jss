const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js'],
    modules: path.resolve(__dirname, 'node_modules'),
  },
  module: {
    rules: [
      {
        test: /\.(js)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
