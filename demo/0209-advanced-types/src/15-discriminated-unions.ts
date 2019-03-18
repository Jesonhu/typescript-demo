// # 可辨识类型(标签联合|代数数据类型): 可以合并单例类型、联合类型、类型保护和类型别名.
namespace discriminatedUnions {
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
  
}

