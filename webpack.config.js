// 由于 webpack 是基于Node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require('path')
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, './src/main.js'), // 入口 表示webpack要打包的文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js", // string
  },
  plugins: [ // 所有webpack  插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称
    }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    port: 4000,
    open: true,
    hot: true,
    contentBase: 'src'
  },

  module: { // 这个节点用于配置所有第三方模块的加载器
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { // 配置 处理 scss 文件的规则
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      { // 处理 样式中字体文件路径的问题
        test: /\.ttf|woff|woff2|eot|svg$/,
        use: 'url-loader'
      },
      {
        // 配置 处理 样式表中图片的 loader规则
        // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
        // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
        // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
        test: /\.jpg|png|gif|bmp$/,
        use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
      },
    ]

  },

  resolve: {
    alias: {
      // 修改vue导入时的路径
      "vue$": "vue/dist/vue.js"
    }
  }

}