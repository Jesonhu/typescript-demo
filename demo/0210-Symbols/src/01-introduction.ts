// # 介绍
namespace introduction {
  // ## demo1:
  // Notice: 需要添加 lib, 详情看 tsconfig.json
  const sym1 = Symbol();
  const sym2 = Symbol('key');

  // ## demo2: Symbols 是不可改变且是唯一的.
  const sym3 = Symbol('key');

  // 会一直返回 false
  // sym2 === sym3;

  // ## demo3: 同字符串一样，symbols 也可以用作对象属性的键.
  const sym = Symbol();
  const obj = {
    [sym]: 'value'
  }

  // ## demo4: Symbols 也可以与计算出的属性名声明结合来声明对象的属性和类成员.
  const getClassNameSymbol = Symbol();
  class C {
    [getClassNameSymbol]() {
      return 'C';
    }
  }
  const c = new C();
  const className = c[getClassNameSymbol]();
  // => 'C'

}