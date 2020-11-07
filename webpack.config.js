const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      //Load js/jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      //Load css files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  }
  // devtool: 'cheap-module-eval-source-map'
  // ,
  // plugins: [
  //   new htmlWebpackPlugin({
  //     template: "./src/index.html"
  //   })
  // ]
};