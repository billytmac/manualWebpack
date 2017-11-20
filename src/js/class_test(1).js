// console.log('ooooo');

// 指若削葱根
// 指若洋葱根

// 只不过，人为的约定了，首字母大写，  内部可以使用this 为new 出来的那块内存，分配一些数据
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eat = function(){
//     console.log('不是吃就是睡');
//   }
// }
// Person.prototype.say = function () {
//   console.log('老王划船不用桨');
// }

// var p1 = new Person('zs', 22);
// console.log(p1);

// 在 class 内部，不能直接写语句  就是不能直接写this之类的
// 在类的作用内部，只能定义 方法 和 属性
// class 只是一个 语法糖   【加盐处理】   MD5加密  加盐处理
class Person {
  constructor(name, age) { // 在 每个 class 内部，默认都有一个隐藏的，看不见的，空的 constructor 构造函数
    // 当我们显示定义了 constructor 以后，就会覆盖默认的哪个 constructor！
    // 注意：每次 new Person的时候，都会在第一时间，执行 constructor 内部的代码！！！
    this.name = name;
    this.age = age;
  }

  // 实例方法   【默认定义的方法就属于实例方法，也就说： 只能通过 new 出来的实例对象来调用】
  say() { // 注意：在类的作用域内部，定义的方法，都是 属于 原型方法
    console.log('东北人，其实就爱BB， 哎讲笑话');
  }

  // 静态方法   【不能通过 new 出来的实例调用，只能通过 class 类名调用】
  static eat() {
    console.log('其实，东北人不爱吃猪肉炖粉条！');
  }

  // 静态属性
  static info = { address: '北京' }
}


var p1 = new Person('zs', 20);
console.log(p1);
p1.say();
Person.eat();
console.log(Person.info);



// 123456    MD5 加密之后，  得到字符串 是 32 位的


// MD5 加密的特点：
// 1. 相同的字符串使用 MD5加密后，得到的结果永远一致   e10adc3949ba59abbe56e057f20f883e


// 为用户的6为数字密码，加盐      （*&……&……%#￥#￥……&*（（123@##￥￥@！@））*&*……%沟通与非


// 123456（*&……&……%#￥#￥……&*（（123@##￥￥@！@））*&*……%沟通与非


// d923d9afdce28a5679f8cff22e8dad57