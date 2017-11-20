// 这是项目的入口文件 
//刚刚我们看了一下那个jquery 发现package.json是一个项目的一个入口文件 在其中的一个main就把它引向了dist/jquery
// var $ = require('jquery')
// 浏览器不支持这个语法
// es6导入模块的方式 import*** from '模块标识符号'
 import $ from 'jquery'

 // 使用 import 直接通过路径标识符 引入CSS样式
import '../css/index.css'
import '../css/index.less'
import '../css/index.scss'
 // 浏览器不支持这个语法浏览器 所以才需要打包
 // 其实也可以用amd 和 cmd  但是我们这里主要用webpack
 //  因为main.js不识别里面的语法 所以 webpack   要打包的文件的路径   打包好的文件的输出路径
// 注意：这种基本的使用方式，所运行的 webpack 必须是 npm i webpack -g 全局的安装的，如果全局没有安装，则不能运行
// 另外还有就是如果你不输入以上的两种路径 他就它就需要创建一个webpack.config.js配置文件
 //  使用 :odd 选取奇数行
// 使用 :even 选取偶数行
$(function () {
  $('li:odd').css('backgroundColor', 'pink');
  $('li:even').css('backgroundColor', function () {
    return 'black';
  });
});

// 使用 ES6中的 class关键字，定义一个类
// class 是ES6中实现面向对象的新方式，相比于 传统的 构造函数，更加语义化并且，更加合理方便，和 一些后台语言： C# ， Java 比较类似了，其实，class关键字只是一个语法糖而已，内部还是转为了 function 构造函数的形式去实现的面向对象；
// class Person {
//   // 定义一个静态属性 
//   static info = { name: '皮特', age: 17 }
// }
// console.log(Person.info);
import './class_test.js'
// import './class_test2.js'
// .js  .json   .node(二进制应用程序)（这个查找规则）

// 
// 
// 注意： 如果使用 webpack 去编译，那么 默认就会把打包好的文件，根据配置文件中 output 属性，输出到对应目录中去；
// 
// 注意：如果 使用 webpack-dev-server 去实时编译，默认不会把 打包好的  bundle.js 输出到 output 指定目录中，而是 输出到了内存中!!!!   WHY  ???  快
// 
// 问题：知道放到了内存中，但是，我们页面该如何引用这个内存中的 bundle.js呢？？
// 从而理解内存和硬盘 cpu的关系
// 
/// 注意： Webpack 默认只能打包处理 .js 后缀名的文件，当遇到 非.js结尾的文件，Webpack 默认处理不了；
//
// 当webpack 遇到处理不了的文件类型的时候，并不是直接报错，而是尝试着去寻找合适的第三方 loader 去转换这些文件类型；如果找不到合适的第三方loader，才会报错；

// 当 webpack 遇到处理不了的文件类型的时候，会去 webpack.config.js 中，查找能处理这种文件类型的第三方loader；
// 
// // 当 webpack 遇到处理不了的文件类型的时候，会去 webpack.config.js 中，查找能处理这种文件类型的第三方loader；
// 
// // 配置Loader分为一下几步：
// 1. 使用 npm i 安装合适的第三方loader
// 2. 在 webpack.config.js 中，添加第三方loader的匹配规则


// 1. 如果要使用模块化打包 CSS文件，需要安装 第三方 loader来处理 后缀名为 .css 的文件
// //  运行 cnpm i style-loader css-loader -D
//  找到webpack.config.js ,在导出的配置对象中，新增 module 节点，module 节点中配置了所有的处理第三方文件类型的处理模块
//  在 新建的 module 节点下，新增一个 rules 数组，这个数组中，配置了所有的第三方文件的匹配规则


// 2. 处理less文件：
//  运行 cnpm i less-loader less -D
//  在 module 节点的 rules 数组中，新增一个less的loader处理规则


// 3. 处理scss文件：
//  运行 cnpm i sass-loader node-sass -D
//  在 module 节点的 rules 数组中，新增一个scss的loader处理规则


// 4. 处理CSS中URL路径问题：
//  运行 cnpm i url-loader file-loader -D
// 在 module 节点的 rules 数组中，新增一个URL路径的loader处理规则


// 5. 处理更高级的ES语法：
//  由于 webpack 默认只能转换一部分的ES6高级语法，不能转换所有的高级语法；这时候，当遇到转换不了的情况，需要安装第三方的 loader模块，叫做 Babel 来转换高级的ES语法到低级语法；
//  运行两套Babel插件安装命令：
//  第一套： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//  一系列的插件 babel-core转换的核心，提供一系列api ，方便node去调用 babel-loader可以匹配.js的文件，将他进行转换，不过只是转换的机器而已
//  babel-plugin-transform-runtime 因为使用webpack模块化打包 为了私有作用域 默认的体积会大一些，这时使用这个插件会减少代码冗余，体积更小一些
//  第二套： cnpm i babel-preset-env babel-preset-stage-0 -D
//  一系列的语法（词典） env可以替换之前2015和2016（低级别）， 这样更加全面一些 stage-0是高级别，因为有es5 es6 es7 stage-0等
//  在 webpack.config.js 中的 module 节点下，配置一个新的rules规则
//  在项目根目录中，新建 .babelrc 配置文件，将来，所有 babel-loader 转换运行期间，需要用到的 语法 和 插件，都在这个 .babelrc 中 进行配置