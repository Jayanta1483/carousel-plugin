const path = require('path');

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  devtool: 'source-map',
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    library: "Carousel",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
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
    ],
  },
};
