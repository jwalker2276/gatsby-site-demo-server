const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const config = {
  mode: "production",
  entry: "./src/client-side-javascript/dashboard",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "dashboard.js"
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "dashboard.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === "development" }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [postcssPresetEnv({ browsers: "last 3 versions" })]
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
