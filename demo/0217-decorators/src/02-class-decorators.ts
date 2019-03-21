// # 类装饰器
namespace classDecorators {
  // ## demo1：基本例子
  function sealed(constructor: Function) {
    console.log('开启冰封千里(构造函数)大招', constructor);
    // @see [seal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  @sealed
  class Greeter {
    constructor(message: string) {
      this.greeting = message;
    }
    greeting: string = '赵六'
    greeter() {
      return 'Hello, ' + this.greeting;
    }
  }

  const greeter = new Greeter('张三');
  greeter.greeting = '李四';
  console.log(greeter.greeting);
  // => '李四' 不是说好被冻结了吗.

  // ## demo2: 重载函数的例子
  interface IClassDecorator {
    new (...args:any[]):{}
  }
  // function classDecorator<T extends { new (...args:any[]): {} }>(constructor: T) {
  function classDecorator<T extends IClassDecorator>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property'
      hello = 'override'
    }
  }
  @classDecorator
  class MyGreeter {
    constructor(m: string) {
      this.hello = m;
    }
    property = 'property'
    hello: string
  }

  const myGreeter = new MyGreeter('word');
  console.log(myGreeter);
}