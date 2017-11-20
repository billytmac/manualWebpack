// 这就是webpackd打包时候，默认要在项目根目录中查找的 配置文件，默认配置文件的名称是 webpack.config.js
// 这是一个典型的 Node模块向外暴露成员的方式
//  导入 Node中的Path模块
// 问题1： 为什么这里可以使用 Node 语法或者 引用Node模块，因为 webpack 是基于Node构建的
var path = require('path');
var webpack = require('webpack');
// 配置热更新用到
var htmlWebpackPlugin = require('html-webpack-plugin'); // 这个包是帮助我们在开发阶段，在内存中自动生成HTML页面，并把 bundle.js 自动注入到 生成的页面中

// import path from 'path'
// 为什么Node不识别 import？？？？   因为Node中的解析引擎是从 chrome中的V8移植过去的，由于 V8 专门是为浏览器开发的引擎，所以暂时不支持，因此，Node也被迫不支持 import
module.exports = { 
  entry: path.join(__dirname, './src/js/main.js'), // 这个 entry 属性，表示要打包的文 件的路径
  output: { // 配置打包好的文件的数据路径和文件名信息  
    path: path.join(__dirname, './dist'), // 指定输出文件的路径是 根目录下的 dist
    filename: 'bundle.js' // 指定输出文件的名称
},
   devServer: { // 这个节点配置了  webpack-dev-server 的相关指令
    //  --open --contentBase src --port 3000 --hot
    open: true, // 默认打开浏览器
    contentBase: 'src', // 指定默认托管的目录为 src 目录
    port: 3000, // 指定打开的端口号
    hot: true // 启用热更新
},
  plugins: [ // 配置插件的数组
    new webpack.HotModuleReplacementPlugin(), // 创建一个 热更新的 插件，配合 hot 属性一起使用 热更新可以更快
    new htmlWebpackPlugin({ // 创建一个 自动生成内存页面的插件，并配置相关参数
      template: path.join(__dirname, './src/index.html'), // 这是指定要生成的模板页面路径
      filename: 'index.html' // 指定生成的内存中的页面，名字叫什么
  })
    ],   
   module: { // 配置所有第三方模块的处理模块
    rules: [ // 是 第三方文件的匹配规则，是用来匹配文件后缀名的，同时指定匹配到的文件，交给 哪种类型的loader 去处理 注意在1.x版本可以省略这个loader，还有use可能会用query
    // 在2.x以后就不能省略，还有loader的处理顺序是从后往前
    // 这里面的sass和less都已经帮我们编译好了 最终变为css 所以不必转换了
    // 任何一个loader后面都可以传参数 还有loader不用向依赖包那样引入 当解析到了 会自动去找webpack.config.js文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // 处理CSS文件的loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理less文件的loader less-loader依赖于less 所以要安装 但只是内部依赖
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理scss文件的loader sass-loader node-sass也是内部被依赖
      { test: /\.(png|jpg|gif|bmp)$/, use: 'url-loader?limit=7631' },
      // { test: /\.(png|jpg|gif|bmp)$/, use: 'url-loader?limit=7631&name=[name].[ext]' } 
      // 另外如果硬是转为真实的url，那就写上[name].[ext] ext是的后缀名 不过这样相同名字会被之后的覆盖，但是如果不用[name].[ext]那么它们自动转为数字，还有如果真的传两个相同图片是没有问题// 处理 图片路径的loader  注意：如果某种文件类型，只有一个 loader ，则可以直接 把 loader 名称以字符串形式，交给 use 去使用
      // //  在 url-loader 中，有个 limit参数，指定了 转为base64格式最大值  只有小于给定值的图片才会被转码为 base64   注意 limit 的单位 是 Byte（字节）  如果图片大小正好等于给定值，不会被转码
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 注意： babel-loader 必须添加 一个 exclude 排除项，把 node_modules 下面的所有第三方模块排除在外，不进行编译转换，否则项目运行不起来！！！所以只把自己编译就行了
      // 调用babel-loader时，不知道调用哪个语法插件进行转换,况且语法插件和babel-loader并没有什么联系，所以需要建立一个 .babelrc文件，里面要用json格式
      ]
  }
}
// 在运行 webpack 这个命令的时候，如果，没有指定 入口文件和 出口文件的路径，那么 webpack 默认会去项目根目录中查找一个叫做  webpack.config.js 的配置文件；
// 当找到这个配置文件后，会加载配置文件中导出的配置对象，会根据配置对象中的 entry 属性指定的路径，当作 要打包文件的路径， 根据 output属性指定的路径，当作输出文件的路径；
// 注意： webpack-dev-server 这个模块，封装了 webpack ，所以 webpack 的基本使用方式，它都完全支持；并且 webpack-dev-server依赖于webpack，所以需要本地安装
// // 学习 webpack-dev-server 的 相关指令：
// 1. --open  表示编译完成后自动打开浏览器
// 2. --port 3000 表示使用指定的端口号托管我们的项目
// 3. --contentBase src 表示从 src 目录中开始托管我们的项目
// 4. --hot 表示启用热重载（热更新）
// 
// 在我们项目发布了以后 直接用webpack
// npm install-production 只会安装发布依赖的包 不会安装开发依赖的包
// 
// // 注意：一般配置插件的三部曲：
//  1. 使用 npm 安装插件
//  2. 在 webpack.config.js 的头部位置，引入刚才安装的插件
//  3. 在 plugins 数组中， new 一下刚才安装的插件，并传递相关的配置参数即可