var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html'
});
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};