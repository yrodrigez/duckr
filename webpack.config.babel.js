import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html'
});

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
  devtool: "cheap-module-inline-source-map",
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
};