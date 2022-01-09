const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  module: {
    // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
    rules: [
      {
        test: /\.js$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_module/, // node module 폴더는 babel 컴파일에서 제외
        use: {
          loader: "babel-loader", // babel loader가 파이프를 통해 js 코드를 불러옴
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
