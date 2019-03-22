// # 方法装饰器
namespace methodDecorators {
  // 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  // 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  // 参数2：成员的名字。
  // 参数3：// 成员的属性描述符。

  // ## demo1: 方法装饰器的例子
  class Greeter {
    greeting: string
    constructor(msg: string) {
      this.greeting = msg;
    }

    @enumerable(false)
    greet() {
      return 'Hello, ' + this.greeting;
    }
  }

  /**
   * enumerable 可枚举，方法装饰器.
   * 
   * 如果装饰器返回了函数，函数会被调用，接收三个参数
   * @param {} value 是否可以枚举标记.
   * @return {} 会被调用的函数，接收三个参数：参数为上面的三个参数.
   */
  function enumerable(value: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
      descriptor.enumerable = value;
    }
  }
  // Notice: 这里的@enumerable(false)是一个装饰器工厂。
  // 当装饰器 @enumerable(false)被调用时，它会修改属性描述符的enumerable属性。
  const greeter = new Greeter('张三');
  for (let key in greeter) {
    console.log(key);
    // greeting
  }

  class MyGreeter {
    greeting: string
    constructor(msg: string) {
      this.greeting = msg;
    }
    greet() {
      return 'Hello, ' + this.greeting;
    }
  }
  const myGreeter = new MyGreeter('李四');
  // 去掉枚举属性的时候
  for (let key in myGreeter) {
    console.log('myGreeter: ', key);
    // greeting
  } 
}