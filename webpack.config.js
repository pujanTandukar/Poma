// var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: './app/index.js',
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
    {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']
      }
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: 'file-loader?name=app/assets/fonts/[name].[ext]'
    },
    {
      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
    }]
  },
  output: {
      filename: 'bundle.js',
      path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};