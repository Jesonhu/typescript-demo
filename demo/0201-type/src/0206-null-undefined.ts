// ## demo1
let n1: number = 1;
let str1: string = 'hello';
let isShow: boolean = true;

// ## demo2
// 未指定 --strictNullChecks 下面写法不会报错.
// 即 strictNullChecks: true 会报错
n1 = null;
n1 = undefined;
str1 = null;
str1 = undefined;
isShow = null;
isShow = undefined;

function null_fn1(): void {
  return null;
}

function null_fn2(): void {
  return undefined;
}
// Notice: 感觉这里好蠢。没指定返回内容，默认就返回 `undefined` 而这里竟然指定了返回 `undefined`.

// ## demo3
// strictNullChecks: true 不会报错

// 默认情况下null 和 undefined 是所有类型的子类型
let null1: null = null;
let any1: any = 1;
null1 = any1;