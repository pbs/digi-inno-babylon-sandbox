const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: {
      publicPath: "/",
    },
    static: {
      staticOptions: {
        contentBase: path.resolve(process.cwd(), "public"),
      },
    },
    compress: true,
    hot: true,
    open: true,
    https: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".glsl"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|gltf|glb|babylon|obj|stl)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
