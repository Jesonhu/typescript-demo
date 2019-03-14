// # 存取器
namespace mAccessors {
  class Animal {
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    private _name: string
    private _age: number

    // Notice: target 需要设置为 es5 以上，默认编译为 es3
    get age() {
      return this._age;
    }
    
    set age(age: number) {
      console.log('想要改年龄？ 满足你');
      this._age = age;
    }

    get name() {
      return this._name;
    }
  }

  const animal = new Animal('张三', 27);

  console.log(`年龄为 ${animal.age}`);

  animal.age = 16;
}