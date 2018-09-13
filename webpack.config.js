const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

console.log(process.env.ENV);

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.(css|scss|sass)$/,
       use: [
         'style-loader',
        //  MiniCssExtractPlugin.loader,
         {
           loader: 'css-loader',
           options: {
             sourceMap: true
           }
         },
         'postcss-loader',
         {
           loader: 'sass-loader',
           options: {
             sourceMap: true
           }
         }
       ]
     }
   ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css',
    // }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    https: true,
    port: 3000,
  }
}