// # for...of vs. for...in 语句
namespace forOfVsForIn {
  // ## demo1: 区别
  const list = [4, 5, 6];

  // for...in 迭代的是对象的 `键的列表`
  for (let i in list) {
    console.log(typeof i);
    // => '0', '1', '2'
  }

  // for...of 迭代对象的键对应的值.
  for (let i of list) {
    console.log(typeof i);
    // => 4, 5, 6
  }

  // ## demo2: `for...in` 可以操作任何对象，提供了查看对象属性的一种方法。但 `for...of`
  // 关注与迭代对象的值.
  let pets = new Set(['cat', 'dog', 'hamster']);
  pets['species'] = 'mammals';
}