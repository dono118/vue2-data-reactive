const path = require("path");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 每次输出清空上一次输出
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
  mode: "development",
};
