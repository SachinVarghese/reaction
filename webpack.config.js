const path = require("path");
const config = require("./config/main");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === "production";
const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: !isProd
});
const bundleAnalyse = new BundleAnalyzerPlugin({
  analyzerMode: "disabled",
  generateStatsFile: true
});

module.exports = {
  mode: isProd ? process.env.NODE_ENV : "development",
  devtool: isProd ? "source-map" : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: config.port,
    historyApiFallback: true,
    hot: true
  },
  entry: {
    app: "./src/app/index.jsx"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: config.name,
      template: "./config/index.html",
      favicon: "./src/assets/me.jpeg"
    }),
    new webpack.HashedModuleIdsPlugin(),
    extractSass,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src", "app"),
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
