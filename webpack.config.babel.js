import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const base = {
  entry: [
    PATHS.src,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {test: /\.js$/, enforce: 'pre', exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, enforce: 'pre', loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.css$/, enforce: 'pre', loaders:["style-loader", "css-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]"]}
    ]
  }
};

const LAUNCH_COMMAND = process.env.NODE_ENV;
const isProduction = LAUNCH_COMMAND === 'production';

const devConfig = {
  devtool: "cheap-module-inline-source-map",
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
};

const prodConfig = {
  devtool: "cheap-module-source-map",
  plugins: [HtmlWebpackPluginConfig]
};

const current = isProduction ? prodConfig : devConfig;
module.exports = {
  ...base,
  ...current
};