// # Class 基本介绍
namespace classes {
  interface IAnimalOption {
    age?: number
  }
  class Animal {
    constructor(age: number) {
      this._age = age;
    }
    private _age: number

    // Error: 访问器仅在面向 ECMAScript 5 和更高版本时可用, 需要设置 --target
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
    callVoice(): void {
      console.log('旺旺...');
    }
  }

  const dog = new Dog(3);
  dog.showAge();
  dog.callVoice();

  // ## demo3 更复杂的例子
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