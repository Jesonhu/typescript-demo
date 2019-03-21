// # readonly 修饰符
namespace mReadonly {
  // ## demo1: 基本演示
  class Animal {
    constructor(name: string) {
      this.name = name;
    }
    readonly name: string
  }

  const animal = new Animal('黑熊');
  animal.name;

  // Error: 只读属性不能赋值
  // animal.name = '哈士奇';

  // ## demo2: 参数只读属性
  class Dog  {
    constructor(name: string, readonly call: string) {

    }
    readonly nativeCall: string = '嗷呜....'
  }

  // ## demo3: 继承父类的只读属性.
  class Wolf extends Animal {
    constructor(name: string) {
      super(name);
    }
  }
  const wolf = new Wolf('西伯利亚灰狼');
  console.log( wolf.name );

  // Notice: 类的只读属性可以被子类继承，但是继承后也是只读的.
  // wolf.name = '哈士奇';
}