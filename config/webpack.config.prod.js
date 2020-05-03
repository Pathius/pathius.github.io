const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: '[hash:6]-main.js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin([
      {
        from: 'public/images',
        to: 'images',
      },
    ]),
  ],
};
