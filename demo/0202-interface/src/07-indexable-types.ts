// # 可索引的类型

// ## demo1:
/**
 * 每项都为字符串的数组. 
 */
interface StringArray {
  [index: number]: string
}

const myStrArr1: StringArray = ['张三', '李四'];
const myStrArr2: Array<string> = ['张三', '李四'];
const myStrArrItem1: string = myStrArr1[0];
const myStrArrItem2: string = myStrArr2[0];

// ## demo2: 由于 JS 索引可以使用：字符串和数字。 TS 也同时支持两种索引签名。
// 当使用 number来索引时，JS 会将它转换成 string 然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引
// 但是 TS 却可以不完全一样，下面做一个测试
class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

// Error TS: 3.3.33 当前版本使用下面这种方式报错了
// interface INotOKay {
//   [x: number]: Animal
//   
// }

// 通过下面方式改写
// Notice: TS 字符串和数字类型的索引返回值可以不同，不同时，`数字类型的索引返回值` 必须是 `字符串类型的索引返回值` 类型的子类型
interface IAllOKay {
  [x: number]: Animal,
  [x: string]: Animal
}
interface IOKay {
  [x: number]: Dog,
  [x: string]: Animal
}

// ## demo3: 字典模式.
interface INumberDictionary {
  [index: string]: number;
  length: number;
  name: number
}