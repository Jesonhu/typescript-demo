// # 字符串枚举
namespace stringEnums {
  // ## demo1: 每个成员必须是字符串
  enum Direction {
    Up    =  'UP',
    Down  =  'DONW',
    Left  =  'LEFT',
    Right =  'RIGHT'
  }
  console.log(Direction.Right);

  // ## demo2: 这样也可以，但是不是一个 字符串枚举 了。
  enum MyDirection {
    Up    =  1,
    Down  =  'DONW',
    Left  =  'LEFT',
    Right =  'RIGHT'
  }

  enum HeDirection {
    Up    =  'UP',
    Down  =  2,
    Left  =  'LEFT',
    Right =  'RIGHT'
  }
}