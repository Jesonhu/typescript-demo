// # 类型保护和类型断言
namespace typeGuardsAndTypeAssertions {
  // demo1: 可以使用类型保护来去除 Null;
  function fn1(sn: string | null) {
    if (sn == null) {
      return 'default';
    } else {
      return sn;
    }
  }

  // demo2: 也可以使用短路运算符
  function fn2(sn: string | null) {
    return sn || 'default';
  }

  // demo3: 如果编译器不能够去除 null 和 undefined, 你可以使用类型断言来手动去除. 语法是添加 ! 后缀：
  // identifier! 从 identifier 的类型里去除了 null 和 undefined;
  function broken(name: string | null): string {
    const postfix = (epithet: string) => {
      // Error: 对象可能为 "null"
      // return name.charAt(0) + '.  the ' + epithet;

      return '';
    }

    name = name || 'Bob';
  
    return postfix('great');
  }

  // 修复上面报错的问题：
  function fixed(name: string | null) {
    const posfix = (epithet: string) => {
      return name!.charAt(0) + '. the ' + epithet;
    }

    name = name || 'Bob';

    return posfix('二狗');
  }

  // Notice: 由于不是立即调用的函数表达式，上面的代码编译器无法去除 null

  // ## demo2: 使用立即调用表达式来去除
  // function testImmediately(name: string | null): string {
    // let result = (function(epithet: string): string {
    //   return name.charAt(0) + '. the ' + epithet;
    // })();
  // }
}