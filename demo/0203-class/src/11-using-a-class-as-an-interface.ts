// # 将类作为接口使用
namespace classInteface {
  // ## demo1:
  // 依据： 类定义会创建两个东西，类的实例类型和构造函数, 因此类可以创建出类型。所以可以作为接口使用

  class Point {
    x: number
    y: number
  }

  interface IPoint3d extends Point {
    z: number;
  }

  const point3d: IPoint3d = {x: 1, y: 2, z: 3};
}