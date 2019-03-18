// # 完整性检查
namespace exhaustivenessChecking {
  // ## demo1： 当存在可辨识联合没有涵盖的变化是，我们需要编译器可以通知我们，
  // 回忆下上一个例子
  // demo1: 
  interface ISquare {
    kind: 'square';
    size: number;
  }

  interface IRectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }

  interface ICircle {
    kind: 'circle';
    redius: number;
  }

  interface IAlone {
    isOne: boolean
  }

  // 由于每个接口都有相同的属性 kind, 我们可以通过这个属性进行合并，而 kind 属性称作 `可辨识的特征`或`标签`.
  type Shape = ISquare | IRectangle | ICircle;

  // Notice: 虽然不会提示报错，但是由于没有相同的属性，所以不是 可辨识联合.
  type uu = ISquare | IAlone | ICircle;

  function area(s: Shape) {
    switch(s.kind) {
      case 'square':
        return s.size * s.size;
      case 'rectangle':
        return s.height * s.width;
      case 'circle':
        return Math.PI * s.redius ** 2;
    }
  }

  // 使用 never 类型，让编译器来进行完整性检查.
  function assertNever(x: string): never {
    return new Error("Unexpected object: " + x) as never;
  }

  function completeArea(s: Shape) {
    switch(s.kind) {
      case 'square':
        return s.size * s.size;
      case 'rectangle':
        return s.height * s.width;
      case 'circle':
        return Math.PI * s.redius ** 2;
      default: 
        return assertNever(s);
    }
  }
}