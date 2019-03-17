// ## 结构子类型-用类的效果来说服你
namespace mClass {
  // ## demo1: 类的例子, 比较两个类类型的对象时，只有实例对象的成员会被比较，但是静态成员和构造函数不在比较的范围内.
  class Animal {
    constructor(name: string, numFeet: number) {}
    /** 脚 */
    feet: number

    static sayHi() {
      return 'Hi';
    }
  }

  class Size {
    constructor(numFeet: number) {}
    feet: number
  }

  class Plant {
    constructor(numFeet: number) {}
    feet: number
    private showNotice() {
      // cytoderm: 细胞壁
      console.log('有细胞壁');
    }
  }

  let a: Animal;
  let s: Size;
  let p: Plant

  a = s;
  s = a;
  a = p;

  // 植物多了个细胞壁，动物没有，索引这里不能赋值
  // Error: Property 'showNotice' is missing in type 'Animal' but required in type 'Plant'.ts(2741)
  // p = a;
}