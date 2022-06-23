const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPageNames = ['main', 'category', 'statistic'];
const multipleHtmlPlugins = htmlPageNames.map((name) => new HtmlWebpackPlugin({
  template: `./src/pages/${name}/${name}.html`,
  filename: `${name}.html`,
}));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[name].[ext]',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }, {
        test: /\.html$/i,
        loader: 'html-loader',
        include: [path.resolve(__dirname, 'html')],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      }, {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    multipleHtmlPlugins[0],
    multipleHtmlPlugins[1],
    multipleHtmlPlugins[2],
    new MiniCssExtractPlugin({ filename: 'style.css', chunkFilename: '[name].css' }),
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets`,
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
