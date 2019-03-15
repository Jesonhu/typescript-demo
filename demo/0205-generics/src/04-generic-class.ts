// # 泛型类
namespace genericClass {
  // ## demo1
  class Generic<T> {
    x: T
    add: (x: T, y: T) => T
  }

  // Notice: "strict": true 开启后上面的属性会报错
  // 属性“x”没有初始化表达式，且未在构造函数中明确赋值。ts(2564)
  // 与 泛型类没关系，是其他原因导致报错的。默认是关闭的.

  const myGenericNumber = new Generic<number>();
  myGenericNumber.x = 0;
  myGenericNumber.add = function(x, y) {
    return x + y;
  }

  // ## demo2: 由于没有限制类型，可以使用其他类型
  const myGenericString = new Generic<string>();
  myGenericString.x = '1';
  myGenericString.add = function(x, y) {
    return x + y;
  }
}