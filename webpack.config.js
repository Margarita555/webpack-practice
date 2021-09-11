const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
              test: /\.scss$/i,
            use: [
              "style-loader",
              {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
              },
              "css-loader",
              "sass-loader",],
            },
            {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
          }
      ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
            new MiniCssExtractPlugin()],
    devServer: {
        port: 9999,
        open: true,
  },
};