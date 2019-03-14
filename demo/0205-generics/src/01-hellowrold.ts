// # 泛型 hello world
namespace genericsHelloWorld {
  // ## demo1: 非泛型写法
  function fn1(p1: number): number {
    return p1;
  }

  // 或者用 any (why: anyscript???)
  function fn2(p1: any): any {
    return p1;
  }

  // ## demo2: 使用泛型改写
  function fn3<T>(p1: T): T {
    return p1;
  }

  fn3('hello');
  fn3(1);
  fn3(true);
  fn3({});

  function fn4<TTT>(p1: TTT): TTT {
    return p1;
  }

  function fn5<A>(p1: A): A {
    return p1;
  }
}