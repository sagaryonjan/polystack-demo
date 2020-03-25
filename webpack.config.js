const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'delphi-app': './src/index.js'
  },
  output: {
    filename: './src/[name].[contenthash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: './' },
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/*js',
        to: './src/webcomponentsjs/',
        flatten: true
      }
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['delphi-app']
    })
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8091,
		host: '0.0.0.0',
    historyApiFallback: true
  }
};
