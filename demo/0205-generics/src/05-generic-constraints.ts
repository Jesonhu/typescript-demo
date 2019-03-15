// # 泛型约束
namespace genericConstraints {
  // ## demo1: 来回顾下之前的例子
  function loggingIdentity<T>(arg: T): T {
    // 由于使用了泛型，当传递的类型没有 .length 就会报错
    // console.log(arg.length);
    return arg;
  }

  // ## demo2: 改进下，只允许传递有 .length 的参数。
  interface ILengthWise {
    length: number;
  }
  function loggingIdentityLengthWise<T extends ILengthWise>(arg: T): T {
    return arg;
  }

  // Error: 数字没有 .legnth 会报错.
  // loggingIdentityLengthWise(1)

  loggingIdentityLengthWise('1');

  // Error:
  // loggingIdentityLengthWise(true);

  const arr1: number[] = [1, 2];
  const arr2: Array<string> = ['1', '2'];
  loggingIdentityLengthWise(arr1);
  loggingIdentityLengthWise(arr2);

  // Error: 枚举属性没有 .legnth
  // enum enum1 {One, Two, Three}
  // loggingIdentityLengthWise(enum1);

  const tuple1: [number, string] = [1, '1'];
  loggingIdentityLengthWise(tuple1);

  const readonlyArr: ReadonlyArray<number> = [1, 2];
  loggingIdentityLengthWise(readonlyArr)

  const obj1 = {length: 1, x: 2};
  loggingIdentityLengthWise(obj1);

  const obj2 = {x: 2};
  // Error: 没有 .length
  // loggingIdentityLengthWise(obj2)

  // 函数本身带 length, 
  // 没有默认参数： .length = 新参的个数
  // 有默认参数：   .legnth = 第一个默认参数的索引
  // @see https://www.cnblogs.com/go4it/p/9678028.html
  const fn1 = (x: number, y: number) => x + y;
  loggingIdentityLengthWise(fn1);
    



}