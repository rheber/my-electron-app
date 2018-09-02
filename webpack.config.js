const path = require('path');
const webpack = require('webpack');

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'app/public/'),
    port: 9001,
    publicPath: 'http://localhost:9001/dist/app/',
    hotOnly: true
  },
  entry: './app/index.js',
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
    path: path.resolve(__dirname, 'dist/app/'),
    publicPath: '/dist/app/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    modules: [
      path.resolve('./app/'),
      path.resolve('./node_modules/')
    ]
  },
  target: 'electron-main'
};

module.exports = config;

