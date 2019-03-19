// # 代码生成规则
namespace codeGeneration {
  // ## demo1: 目标为 es5 和 es3
  // 当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。 
  // 在非数组值上使用 for..of语句会得到一个错误，就算这些非数组值已经实现了Symbol.iterator属性。
  // 且生成代码通过 for 语句实现

  // 目标为：es6 及以上，会通过 for...of 实现.
  const numbers = [1, 2, 3];
  for (let num of numbers) {
    console.log(num);
  }
}