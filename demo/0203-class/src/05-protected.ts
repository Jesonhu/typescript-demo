// # 理解 protected
namespace mProtected {
  // ## demo1
  class Animal {
    constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    private name: string
    public age: number
    protected sex: string
  }

  // Notice: 说明 `protected` 子类也是可以访问的.
  class Dog extends Animal {
    constructor(name: string, age: number, sex: string) {
      super(name, age, sex);
    }
    showSex() {
      console.log(`性别为: ${this.sex}`);
    }
  }

  const dog = new Dog('哈士奇', 2, '雄性');

  dog.age
  
  // Error: 私有属性外部不能获取
  // dog.name

  // Error: 保护属性只有 派生类 可以获取。外部不能获取
  // dog.sex

  dog.showSex();


  // ## demo2： 构造函数也能为保护属性
  // 这样可以作为只能继承的类使用
  class Person {
    protected constructor(name: string) {
      this.name = name;
    }
    protected name: string
  }

  class Student extends Person {
    constructor(name: string, classGrade: string) {
      super(name);
      this.classGrade = classGrade;
    }

    /** 班级 */
    private classGrade: string

    public getDesc() {
      console.log(`${this.name} 所在的班级为 ${this.classGrade}`);
    }
  }

  const student = new Student('小明', '三年五班');
  student.getDesc();

  // 构造函数被保护的，这里不能使用
  // 构造函数的保护属性使得该类只能用于继承，实例化都会被禁止.
  // const tom = new Person('tom');
}