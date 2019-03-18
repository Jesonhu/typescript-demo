// # 可选参数和可选属性
namespace optionalParametersAndProperties {
  // ## demo1: 开启 --strictNullChecks, 可选参数会自动的加上 | undefined;
  function fn(x: number, y?: number) {
    return x + (y || 0);
  }

  fn(1, 2);
  fn(1);
  fn(1, undefined);

  // Error: null 与 undefined 是不同的类型
  // fn(1, null);

  // ## demo2: 可选属性也会同样的处理.
  class C {
    a: number
    b?: number
  }

  const c = new C();
  c.a = 12;
  // Error: 
  // c.a = undefined;
  c.b = 13;
  c.b = undefined;

  // Error: 
  // c.b = null;

}