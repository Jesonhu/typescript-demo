// # 计算的和常量成员
namespace computedAndConstantMembers {
  // ## demo1: 没有初始化器，默认被赋值为：0
  enum E { X }
  console.log(E.X);
  // => 0

  // ## demo2: 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
  enum E1 {X, Y, Z}
  // Notice: 默认初始化器从 0 开始
  console.log(E1.X);
  // => 0

  enum E2 {
    A = 1, B, C
  }
  // Notice: A = 1 是一个数字常量，后面每项的值 + 1
  console.log(E2.A);
  // => 1

  enum E3 {
    A = 1,
    B,
    C
  }
  // Notice: 同上面效果一样
  console.log(E3.A);
  // => 1

  enum E4 {
    A = 1,
    B = 2,
    C = 3
  }
  // Notice 同上面效果一样，不过最麻烦
  console.log(E4.A);
  // => 1

  // ## demo2: 不是数字常量测试下
  // Error: 枚举成员必须具有初始化表达式
  // enum E5 {
  //   A = '1', B, C
  // }

  // ## demo3: 使用运算符
  // @see http://www.w3school.com.cn/js/pro_js_operators_bitwise.asp
  // 10进制转2进制。
  // 10进制转4位2进制： 
  // 1. 数字除于2取余，
  // 2. 余写右边，
  // 3. 商继续除于2取余，
  // 4. ...
  // 5. 直到商小于1，
  // 6. 余数按照下往上写余，
  // 7. 不足4位前面的位数补0
  enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '1234'.length
  }

  console.log('-------------------- 华丽的分割线 --------------------');
  console.log(FileAccess.None);
  // => 0
  console.log(FileAccess.Read);
  // => 2
  console.log(FileAccess.Write);
  // => 4
  console.log(FileAccess.ReadWrite);
  // => 6
  console.log(FileAccess.G);
  // => 4


}