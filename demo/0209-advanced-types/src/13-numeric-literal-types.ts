// 数字字面量类型
namespace numericLiteralTypes {
  // ## demo1: 数字字面量类型展示
  type numType = 1 | 2 | 3 | 4 | 5 | 6;
  function rollDie(): numType {
    let a = 1 as numType;

    return a
  }

  // ## demo2: 很少这样直接使用，但是我们可以在调试bug的时候缩小范围.
  function foo(x: number) {
    // 当 x 与 2进行比较的时候，它的值必须为 1，这就意味着上面的比较检查是非法的
    // if (x !== 1 || x !== 2) {

    // }
  }
}