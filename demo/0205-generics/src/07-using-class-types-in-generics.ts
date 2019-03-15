// 在泛型里使用类类型
namespace usingClassTypesInGenerics {
  // ## demo1: 使用泛型创建工厂函数.
  // Notice: {new(): T} 使用带有调用前面的对象字面量来定义泛型函数 
  // @see: 03
  function simpleFactory<T>(c: {new(): T}): T {
    return new c();
  }

  // ## demo2: 更高级的例子，使用原型属性推断并约束构造函数与类实例的关系
  /**
   * 蜜蜂管理员. 
   */
  class BeeKeeper {
    /** 戴面罩 */
    hasMask: boolean
  }

  /**
   * 动物管理员 
   */
  class ZooKeeper {
    nameteg: string
  }

  /**
   * 动物 
   */
  class Animal {
    numLegs: number
  }

  /**
   * 蜜蜂 
   */
  class Bee extends Animal {
    keeper: BeeKeeper
  }

  /**
   * 狮子 
   */
  class Lion extends Animal {
    keeper: ZooKeeper
  }

  function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
  }

  createInstance(Lion).keeper.nameteg;
  createInstance(Bee).keeper.hasMask;

  // Error:  类型“ZooKeeper”上不存在属性“hasMask”
  // Notice: 动物园的管理员不需要戴面罩.
  // createInstance(Lion).keeper.hasMask;
}