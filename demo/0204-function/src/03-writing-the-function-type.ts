// # 为函数定义完整的类型
namespace writingTheFunctionType {
  // ## demo1
  const myAdd: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
  }

  // ## demo2 参数不要求一致
  const myAdd2: (p1: number, p2: number) => number = (x: number, y: number): number => x + y;

  // ## demo3: 函数类型的返回值类型需要指定

  // const myAdd3: (p1: number, p2: number): void = (x: number, y: number) => {}
  // : 指定返回值无效

  // 通过 => 指定返回值
  const myAdd3: (p1: number, p2: number) => void = (x: number, y: number) => {}

}