const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    App: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "assets/js/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader", // o "svg-inline-loader" si prefieres
            options: {
              svgo: {
                plugins: [
                  { removeTitle: false }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
