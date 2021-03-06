'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin')
const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV || 'production',

  entry: path.resolve(__dirname, 'src', 'app.js'),

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(process.env.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //   },
      // },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },

  target: 'web',

  devtool: 'inline-source-map',
};
