// # 类装饰器
namespace classDecorators {
  // ## demo1：基本例子
  // 1. 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数.
  // 2. 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明.
  // 注意  如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。 在运行时的装饰器调用逻辑中 不会为你做这些。
  function sealed(constructor: Function) {
    // console.log('开启冰封千里(构造函数)大招', constructor);
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

  // ## demo2: 重载函数的例子, 这是一个 `构造器签名`
  interface IClassDecorator {
    new (...args:any[]):{}
  }
  /**
   * 类装饰器.
   * 
   * @param {} constructor 作为类装饰器时，函数接收一个唯一参数，参数为构造函数.
   * @retrun {} 
   */
  // function classDecorator<T extends { new (...args:any[]): {} }>(constructor: T) {
  function classDecorator<T extends IClassDecorator>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property'
    }
  }
  // Notice: 由于作为类装饰器使用，且有返回内容，该返回内容会作为构造函数替换类声明。

  @classDecorator
  class MyGreeter {
    constructor(m: string) {
      this.hello = m;
      // Notice: 使用类装饰时，这里并没有被重写掉，任然可以接收参数，并给属性赋值.
    }
    property = 'property'
    hello: string
  }

  const myGreeter = new MyGreeter('word');
  console.log(myGreeter);
}