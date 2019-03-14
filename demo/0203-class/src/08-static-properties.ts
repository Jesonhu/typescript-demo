namespace staticProperties {
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
}