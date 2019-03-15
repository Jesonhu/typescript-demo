// 联合枚举与枚举成员的类型
namespace unionEnumsAndEnumMemberTypes {
  // ## demo1: 枚举的成员成为了类型，此时 某些成员只能是枚举成员的值
  enum ShapeKind {
    ICircle,
    ISquare
  }

  interface ICircle {
    kind: ShapeKind.ICircle;
    radius: number;
  }

  interface ISquare {
    kind: ShapeKind.ISquare;
    sideLength: number
  }

  const c: ICircle = {
    radius: 100,

    // Error: 不能将类型“ShapeKind.ISquare”分配给类型“ShapeKind.ICircle”。ts(2322)
    // kind: ShapeKind.ISquare,

    kind: ShapeKind.ICircle
  }

  const s: ISquare = {
    sideLength: 5,
    kind: ShapeKind.ISquare
  }

  // ## demo2: 没明白是什么意思.
  enum E {
    Foo,
    Bar
  }

  // Error: This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
  function f(x: E) {
    // if (x !== E.Foo || x !== E.Bar) {

    // }
  }
}