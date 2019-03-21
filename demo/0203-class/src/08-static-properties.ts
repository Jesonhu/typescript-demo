namespace staticProperties {
  // ## demo1: 基本静态属性演示.
  class Animal {
    constructor(name: string) {
      this.name = name;
    }
    name: string
    static getClassNmae() {
      console.log('类名为 Animal');
    }
  }

  const animal = new Animal('二哈');

  console.log( animal.name );

  // Error: 类型“Animal”上不存在属性“getClassName”。ts(2339)
  // 由于是静态属性(类上面的属性和方法，非实例对象的)
  // animal.getClassName();

  Animal.getClassNmae();

  // ## demo2: 静态属性搭配 public(默认) private
  class Person {
    private static getPersonName() {}
  }
  class Employee extends Person {}
  
  const employee = new Employee();

  // Error: 实例对象是不允许访问静态属性或方法的
  // employee.getPersonName

  // 由于父类 static 是私有方法，子类也是不能访问这个静态方法的.
  // Employee.getPersonName

  // ## demo3: 静态属性搭配：proceted
  // Notice: 修饰符 proceted static 不能搭配使用.
  // class Bear {
  //   constructor(name: string) {}
  //   protected static
  // }

  // ## demo4: 构造函数使用：proceted
  // Notice: 修饰符 static 不能用于构造函数.
  // class Bird {
  //   static constructor(name: string) {}
  // }
}