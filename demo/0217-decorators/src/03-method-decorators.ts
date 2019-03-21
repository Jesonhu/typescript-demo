// # 方法装饰器
namespace methodDecorators {
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