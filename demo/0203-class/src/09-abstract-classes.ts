// # 抽象类： 作为其他派生类的基类使用，可以指定派生类必须实现的功能。它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节
namespace abstractClasses {
  // ## demo1: 基类指定派生类的实现
  abstract class Animal {
    constructor(name: string) {
      this.name = name;
    }
    name: string
    // 必须在派生类中实现
    abstract showName(): void
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }

    // Notice: 继承了抽象类，如果没有实现的话，子类会报错.
    showName() {
      console.log(`名字为: ${this.name}`);
    }
  }

  // class Pig extends Animal {
  //   constructor(name: string) {
  //     super(name);
  //   }
  // }
  // Error: 没有实现基类指定的方法

  // ## demo2: 看下接口的效果
  // 通过接口实现抽象类的功能.
  class Control {
  }

  interface ISelectableControl extends Control {
    select(): void;
  }

  // 必须实现 select()
  class Button extends Control implements ISelectableControl {
    select() {}
  }

  // 即使只是实现 ISelectableControl 接口, 也必须实现 select()
  class Img implements ISelectableControl {
    select() {}
  }

  // Notice: 由于都继承了接口 `ISelectableControl`, 
  // 而接口指定了实现功能，这个接口的类必须实现接口的功能
}
