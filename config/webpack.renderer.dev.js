const path = require('path');
const webpack = require('webpack');

const config = {
  devServer: {
    contentBase: path.join(__dirname, '../app/public/'),
    port: 9001,
    publicPath: 'http://localhost:9001/dist/',
    hotOnly: true
  },
  devtool: 'source-map',
  entry: './app/index.js',
  mode: 'development',
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
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    modules: [
      path.resolve('./app/'),
      path.resolve('./node_modules/')
    ]
  },
  target: 'electron-renderer'
};

module.exports = config;
