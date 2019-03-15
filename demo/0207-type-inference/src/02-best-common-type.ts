// # 最佳通用类型
namespace bestCommonType {
  // ## demo1: 
  const bestArr = [0, 1, null];

  const aa = [0, '1', ];

  // ## demo2: 推论的结果不是我们想要的结果时可以手动指定下
  class Animal {
    eat: string
  }

  class Wolf extends Animal {}

  class Snake extends Animal {}

  class Panda extends Animal {}

  const zoo = [new Panda(), new Wolf(), new Snake()];
  // 由于没有找到最佳通用类型，类型推断的结果为联合数组类型
  
  const boo: Animal[] = [new Panda(), new Wolf(), new Snake()];
}