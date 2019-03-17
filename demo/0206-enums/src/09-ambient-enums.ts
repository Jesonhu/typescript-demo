// # 外部枚举
namespace ambientEnums {
  // ## demo1: 对比看下，没有初始化方法的成员在外部枚举和正常枚举的区别。
  declare enum E1 {
    A = 1,
    B,
    C = 2
  }

  enum E2 {
    A = 1,
    B,
    C = 2
  }

  // demo2: 命名空间内使用 declare 并导出，看看效果
  // 区别：1 .js 只生成了 `E2` 和 `E4`
  export declare enum E3 {
    A = 1,
    B,
    C = 2
  }

  export enum E4 {
    A = 1,
    B,
    C = 2
  }
}