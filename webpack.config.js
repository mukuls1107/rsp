const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    contact: './src/contact.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: './src/views/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: "About Page",
      template: './src/views/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      title: "Contact Page",
      template: './src/views/contact.html',
      filename: 'contact.html',
      chunks: ['contact']
    })
  ], 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
  },
    compress: true,
      port: 9000
}

}