// # 高级技巧-构造函数
namespace constructorFunctions {
  // ## demo1: 指定实例对象的类型
  class Greeter {
    constructor(msg: string) {
      this.greeting = msg;
    }
    greeting: string
    showGreet() {
      return this.greeting;
    }
  }

  const greeter: Greeter = new Greeter('hello TypeScript');

  // ## demo2: 针对上面的改动下
  class SayHi  {
    static staticHi: string = 'construtor Function say Hello'
    hi: string
    showHi() {
      if (this.hi) {
        return 'instace say' + this.hi;
      } else {
        return SayHi.staticHi;
      }
    }
  }

  let hi1: SayHi;
  hi1 = new SayHi();
  console.log(hi1.showHi());

  // typeof SayHi -- 取 SayHi 类的类型，而不是实例的类型。或者更确切的说
  // “告诉我 SayHi 标识符的类型”， 也就是构造函数的类型.
  let sayHiMaker: typeof SayHi = SayHi;
  sayHiMaker.staticHi = 'Hey there';

  let hi2: SayHi = new SayHi();
  // 由于静态属性被更改，输出结果也不一样.
  console.log(hi2.showHi());
}