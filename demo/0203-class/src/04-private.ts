// # 类私有属性
namespace mPrivate {
  // ## demo1: 私有属性只能类内部使用.
  class Animal {
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    private name: string
    public age: number
  }

  const animal = new Animal('黑熊', 3);
  console.log( animal.age );
  // console.log( animal.name );

  // ## demo2: 子类可以继承私有属性吗
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
  }

  const dog = new Dog('哈士奇', 2);
  console.log( dog.age );
  // console.log( dog.name );

  // ## demo3: 外部获取私有属性
  class Wolf extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }

    // Error: 私有属性只能在当前类中获取，子类也不能获取
    public pubName() {
      // return this.name;
    }
  }
}