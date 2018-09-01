const path = require('path');
const webpack = require('webpack');

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 9001,
    publicPath: 'http://localhost:9001/dist/',
    hotOnly: true
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;

