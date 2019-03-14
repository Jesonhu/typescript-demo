// # 使用泛型变量
namespace genericTypeVariables {

  // ## demo1: 回忆下之前的泛型 helloWorld
  function fn1<T>(p1: T): T {
    return p1;
  }
  fn1('1');
  fn1(1);
  fn1(true);

  // 泛型: 由传入的参数类型指定。加入函数体内使用了参数的 .legnth 如果传入的参数有这个属性那没问题，
  // 没有的时候如何处理呢?
  function fn2<T>(p1: T): T {
    // Error: 类型“T”上不存在属性“legnth”。ts(2339)
    console.log(p1.legnth);
    return p1;
  }


  
}