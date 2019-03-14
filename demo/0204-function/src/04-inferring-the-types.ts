// # 推断类型
namespace inferringTheTypes {

  interface IFn {
    (p1: number, p2: number): number
  }

  // ## demo1
  // 这里指定了完整的类型
  const fn1: (p1: number, p2: number) => number = function(x: number, y: number): number {
    return x + y;
  }

  // 让函数自己推断出类型
  const fn2: (p1: number, p2: number) => number = function(x, y): number {
    return x + y;
  }

  // ## demo2: 进一步简化函数类型通过接口方式提示
  
}