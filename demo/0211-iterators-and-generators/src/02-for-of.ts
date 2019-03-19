// # for..of 语句
namespace forOf {
  // ## demo1: for...of会遍历可迭代对象，调用对象上的 `Symbol.iterator` 方法.
  const someArray = [1, 'string', false];
  for (let i of someArray) {
    // 如果指定了 tsconfig.json, lib 就需要添加 dom, 否则会报错. 没有这个字段默认是添加的.
    console.log(i);
  }
}