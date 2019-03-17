// # 基本例子
namespace basic {
  // ## demo1: 没指定类型的地方是如何被推论的呢
  const x = 3;

  x.toFixed(2);
  // Notice: 这里 x 被自动推断为了数字，但是，却没有提示为 Number

  // ## demo2: 有时候我们希望鼠标悬浮时候提示为 number 类型，而不是 3，因为3表示一个数值，当然也是数字类型，
  // 为了更好的提示还是明确指定下

  const y: number = 4;
  y.toFixed(2);

  // ## demo3: 以上问题不严重，下面问题就有点严重了, 推断为了 any 类型，如果类型不准确需要手动指定.
  let myFavoriteNumber;
  myFavoriteNumber = 5;
  myFavoriteNumber = '5';

  // 如果避免这种问题呢
  let myFavoriteNumber2: number;
  myFavoriteNumber2 = 6;

  // Error:
  // myFavoriteNumber2 = '6';
}