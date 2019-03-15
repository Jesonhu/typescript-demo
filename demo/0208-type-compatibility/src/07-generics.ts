// 结构子类型： 泛型
namespace generics {
  interface IEmpty<T> {

  }

  let x: IEmpty<number>;
  let y: IEmpty<string>;
  
  // Ok:
  // x = y

  // Ok:
  // y = x
}