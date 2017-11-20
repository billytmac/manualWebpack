class Person {
  constructor(name, age) {
    console.log(3);
    this.name = name;
    this.age = age;
  }

  say() {
    console.log('我是：' + this.name);
  }
}

// 在 class 中使用 extends 实现继承
class SH extends Person {
  constructor(name, age, hair) {
    // 在这里也注意参数的接受和传递
    // 注意： super 表示 父类中的 constructor 构造函数
    // 注意：如果使用 extends 实现了继承，那么 必须在 显示调用 父类的 super() 之后，子类才能拥有自己的this；
    console.log(1);
    super(name, age);
    console.log(2);
    this.hair = hair;
  }
}

class GD {

}


// var p1 = new Person('zs', 20);
// console.log(p1);


var sh1 = new SH('薛之谦', 30, 'green');
console.log(sh1);
sh1.say();



//  在 class中使用 extends 实现继承
//  在class 内部默认有一个空的看不见的 constructor
//  如果使用 extends实现了继承，则在子类中，如果要使用this, 必须先调用super() 这个父类的构造函数 有点类似愚公移山
//  在 new 一个 class的时候，会第一时间执行 被 new 这个类的 constructor， 如果在 执行这个子类的 constructor 期间，遇到了 super 方法，这会先暂停执行子类的 constructor， 立即跳转到 父类的 constructor 中去执行，执行完父类的 constructor， 再 回到子类的 constructor 中继续执行；


// 严格来说，JS不属于严格的面向对象语言；

// 面向对象语言 的三大特征：
//  1. 封装【什么封装？方法、类、接口都属于封装】
//  2. 继承
//  3. 多态【JS没有多态 - 就是接口的概念】


// 所谓的接口：就是一个抽象的概念，定义了一些抽象的方法，这个抽象方法并没有具体的方法体；只是定义了子类将来再继承接口的时候，需要实现一个具体的方法；

// Animal      bulk console.log('喵了个咪');   console.log('Do 了 ge');
// interface Animal {
//   bulk(){} // 这是一个抽象方法
// }

// class cat extends Animal{
//   bulk(){
//     console.log('喵喵');
//   }
// }

// cat  doge


// 如果等待能够解决问题，那么乌龟早就统治世界了
// 如果哀嚎能够解决问题，那么驴子早就统治世界了