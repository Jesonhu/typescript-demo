// # 运行是的枚举：枚举是在运行时真正存在的对象
namespace enumsAtRuntime {
  // ## demo1: 演示
  enum E {
    X, Y, Z
  }

  function fn(obj: {X: number}) {
    return obj.X
  }

  console.log(fn(E));
  // => 0

  enum E2 {
    X = 1, Y, Z
  }
  console.log(fn(E2));
  // => 1
}