// 默认
enum Color {One, Two, Three};

const c: Color = Color.One;
console.log(c);
// => 0
// => 默认枚举对象开始下标为 0

// 指定枚举开始下标
enum Enum1 {One = 1, Two, Three};
const enum1: Enum1 = Enum1.One;
console.log(enum1);
// => 1

// 全部指定枚举下标
enum Enum2 {One = 'One', Two = 'Two', Three = 'Three' }
const enum2: Enum2 = Enum2.One;
console.log(enum2);
// => One
// Notice: 不一定要指定为数字，还可以指定任意类型.

