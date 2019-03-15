// # 使用泛型变量
namespace genericTypeVariables {

  // ## demo1: 回忆下之前的泛型 helloWorld
  function fn1<T>(p1: T): T {
    return p1;
  }
  fn1('1');
  fn1(1);
  fn1(true);

  // ## demo2: 问题解决
  // 泛型: 由传入的参数类型指定。加入函数体内使用了参数的 .legnth 如果传入的参数有这个属性没问题，
  // 没有的时候就会报错，如何处理呢?
  // function fn2<T>(p1: T): T {
  //   // Error: 类型“T”上不存在属性“legnth”。ts(2339)
  //   console.log(p1.legnth);
  //   return p1;
  // }

  function fn3<T>(p1: T[]): T[] {
    console.log(p1.length);
    return p1;
  }

  // Error
  // fn3(1)

  // Error
  // fn3('1');

  // Error
  // fn3(true);

  fn3([1, '1']);
  fn3(['1', '1']);
  fn3([false]);

  // ## demo3: 实现上面的功能
  function fn4<T>(p1: Array<T>): Array<T> {
    console.log(p1.length);
    return p1;
  }

  // Error
  // fn4(1)

  // Error
  // fn4('1');

  // Error
  // fn4(true);

  fn4([1, '1']);
  fn4(['1', '1']);
  fn4([false]);
  
}