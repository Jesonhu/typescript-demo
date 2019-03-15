// # 数字枚举
namespace numericEnums {
  // ## demo1: 常规的数字枚举，其他语言常见的.
  export enum Direction {Up = 1, Down, Left, Right}

  console.log(Direction.Down);
  // => 2

  // ## demo2: 未指定初始值
  enum DefaultDirection {Up, Down, Left, Right}
  console.log(DefaultDirection.Up);
  // => 0

  // ## demo3: 指定每项具体的值
  enum HasValueDirection {Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT'}
  console.log(HasValueDirection.Up);
  // => UP
  console.log(HasValueDirection.Right);
  // => RIGHT

  // ## demo4: 使用枚举
  enum Response {
    No = 0,
    Yes = 1
  }
  function response(msg: string, type: Response) {

  }
  response('请求失败', Response.No);
  response('请求成功', Response.Yes);

  // ## demo5: 数字枚举可以被混入到 计算过的和常量成员
  const a: number = 1;
  const b: number = 2;

  // Error: X 是计算过的值，Y 也要求这样
  // enum EA {
  //   X = a,
  //   Y
  // }

  // Good
  enum EA {
    X,
    Y = a
  }

  // Good
  enum EB {
    X = b,
    Y = a
  }

  console.log(EB.X);
  // => 2
}