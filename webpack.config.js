const path = require('path')

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // 每次输出清空上一次输出
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src') // 这样配置后 @ 可以指向 src 目录
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3000,
    open: true
  },
  mode: 'development'
}
