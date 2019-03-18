// # `所有类型`和`字符串索引签名`
namespace indexTypesAndStringIndexSignatures {
  // ## demo1: 连个进行交互.
  interface IMap<T> {
    [key: string]: T;
  }
  let keys: keyof IMap<number>;   // string
  let value: IMap<number>['foo']; // number
}