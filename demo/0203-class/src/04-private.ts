// # 类私有属性
namespace mPrivate {
  // ## demo1: 私有属性只能自身类内部使用(子类都无法使用)
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

  // Notice: 属性 `name` 为私有属性，在类外部是不能访问的.
  // console.log( animal.name );

  // ## demo2: 子类可以继承私有属性吗
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
  }

  const dog = new Dog('哈士奇', 2);
  console.log( dog.age );

  // Notice: 子类是不能继承父类的私有属性的.
  // console.log( dog.name );

  // ## demo3: 外部获取父类的私有属性
  // Notice: 除了自身类，其他类包括子类都是不能访问父类的私有属性的。
  // 因此这里的例子会报错.
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