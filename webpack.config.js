const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

var config = {
  entry: {
    app: './src/index.js',
    vendor: [
      "react", "react-dom", "redux", "react-redux"]
  },

  output: {
    path: __dirname,
    filename: './public/js/bundle.js',
  },

  resolve: {
      modules: [
          path.resolve('./'),
          path.resolve('./node_modules'),
      ]
  },

  devServer: {
    publicPath: "/",
    contentBase: "./public",
    port: 8080,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader' },
    ]
  },

  plugins: [
      //new BundleAnalyzerPlugin({ analyzerMode: 'static' }),

      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: './public/js/vendor.js',
        minChunks: Infinity,
      }),
  ]
}

module.exports = config;
