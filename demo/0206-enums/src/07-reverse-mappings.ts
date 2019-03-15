// # 反向映射：枚举对象处理支持枚举名字到值外，还支持枚举值到名字
namespace reverseMappings {
  // ## demo1: 基本举例
  enum Enum {
    A
  }

  // 名字到值
  const a = Enum.A;

  // 值到名字
  const nameOfA = Enum[a];
  console.log(nameOfA);

  // ## demo2: 试下禁区：`不会为字符串枚举成员生成反向映射`
  enum E2 {
    B = 'B'
  }

  // 名字到值
  const b = E2.B;
  // 值到名字呢
  // Notice: 虽然不会报错，但是通过查看编译后的 js，发现少了 `Enum["A"] = 0` 这样的代码
  const nameofB = E2[b];
  console.log(nameofB);
}