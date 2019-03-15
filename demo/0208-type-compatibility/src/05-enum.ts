// 结构子类型-枚举的好处
namespace myEnum {
  // ## demo1: 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的
  enum Status { Ready, Waiting }
  enum Color { Red, Blue, Green }
  
  let status = Status.Ready;

  // Error: 即使值相同，但是不同枚举之间是不兼容的。
  // status = Color.Red;

  // 可以再次指定给同枚举的其他对象.
  status = Status.Waiting;
}