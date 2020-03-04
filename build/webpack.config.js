const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // 项目编译的入口文件
  entry: './src/index.ts',  
  // 编译后的输出文件
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js']
  },
  module:{
    // 对于指定后缀文件处理loader之类
    rules:[{
      test:/\.tsx?$/,
      use: 'ts-loader',
      // 编译时排除的一些文件
      exclude: /node_modules/ 
    }]
  },
  // 调试时定位到代码位置（本地开发需要，生产时不需要）
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    // 运行基于的根目录
    contentBase: './dist',
    // 控制台打印的信息
    stats:'errors-only',
    // 是否启动压缩
    compress: false,
    host: 'localhost',
    port: '8089'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}