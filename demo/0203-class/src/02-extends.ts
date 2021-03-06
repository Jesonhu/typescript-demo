// # 继承
namespace myExtends {
  interface IAnimalOption {
    age?: number
  }
  class Animal {
    constructor(age: number) {
      this._age = age;
    }
    private _age: number

    // Error: module: umd 这里会报错. 访问器仅在面向 ECMAScript 5 和更高版本时可用
    public get age(): number {
      return this._age
    }
    public set age(value: number) {
      this._age = value;
    }
    type: string
    showAge() {
      console.log(this._age);
    }
  }

  const animal = new Animal(16);
  animal.showAge();

  // ## demo2: 子类(派生类) 父类(基类) 基类（超类）
  class Dog extends Animal {
    // call 与语法定义的 call(this),有些冲突了.
    // call(): void {
    callVoice(): void {
      console.log('旺旺...');
    }
  }

  const dog = new Dog(3);
  dog.showAge();
  dog.callVoice();

  // ## demo3 更复杂的例子(子类完全、部分重写父类)
  class Wolf extends Animal {
    constructor(age: number) {
      super(age);
    }
    // 部分重写
    showAge() {
      console.log('狼的年龄为');
      super.showAge();
    }
  }

  class Horse extends Animal {
    constructor(age: number) {
      super(age);
    }
    // 全部重写
    showAge() {
      console.log('马的年龄为', this.age);
      // super.showAge();
    }
  }

  const wolf = new Wolf(3);
  const horse: Animal = new Horse(5);

  wolf.showAge();
  horse.showAge();
}