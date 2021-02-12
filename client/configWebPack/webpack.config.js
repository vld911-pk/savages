const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app:  ["@babel/polyfill", path.resolve(__dirname,"../src/index.js")],
    vendor: ["react","react-dom"]
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".jpg"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: '../src/index.html',
      title: "fs webpack build",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["react-hot", 'babel-loader'],
        query: {
           presets : ['es2015', 'react']
        }
    },
     
      { test: /\.json/, loader: 'json-loader', type: 'javascript/auto' }

    ],
  },
};
