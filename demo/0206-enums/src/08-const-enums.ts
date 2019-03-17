// const 枚举
namespace constEnums {
  // ## demo1： 比较下编译后的效果.
  export enum E1 {
    A = 1,
    B = A * 2
  }

  export const enum E2 {
    A = 1,
    B = A * 2
  }
  // Notice: const 后不会生成 枚举的 js 功能代码.

  // ## demo2: 通过 const 让 枚举成为只在 ts(d.ts) 处出现的功能。
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
  // Notice: 查看生成的.js代码为：var directions = [0, 1, 2, 3];
}