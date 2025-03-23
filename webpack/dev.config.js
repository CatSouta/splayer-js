const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  entry: {
    SPlayer: './src/js/index.js'
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'template-string-optimize-loader',
          { loader: 'babel-loader', options: { cacheDirectory: true, presets: ['@babel/preset-env'] } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer, cssnano] } } },
          'sass-loader'
        ]
      },
      {
        test: /\.jpg$/,
        type: 'asset/inline'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      SPLAYER_VERSION: `"${require('../package.json').version}"`
    })
  ],

  devServer: {
    hot: true,
    compress: true,
    static: {
      directory: path.resolve(__dirname, '..', 'demo')
    }
  }
};
