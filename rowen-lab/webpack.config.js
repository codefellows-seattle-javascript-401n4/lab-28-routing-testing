'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
  },

  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },

  plugins: [
    new HTMLPlugin(),
    new ExtractPlugin('bundle.[hash].css'),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap:true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths:[`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },

    ],
  },
};
