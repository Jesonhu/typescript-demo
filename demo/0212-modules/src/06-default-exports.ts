// # 默认导出

// ## demo1: jQuery.d.ts 这样的默认导出
// JQuery.d.ts
// declare let $: JQuery;
// export default $;

// App.ts
// import $ from 'JQuery';
// $("button.continue").html( "Next Step..." );

// ## demo2: 类和函数的默认导出
// ZipCodeValidator.ts
// export default class ZipCodeValidator {
//   static numberRegexp = /^[0-9]+$/;
//   isAcceptable(s: string) {
//       return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
//   }
// }

// Test.ts
// import validator from "./ZipCodeValidator";

// let myValidator = new validator();

// 或者导出一个函数
// StaticZipCodeValidator.ts
// const numberRegexp = /^[0-9]+$/;

// export default function (s: string) {
//     return s.length === 5 && numberRegexp.test(s);
// }

// Test.ts
// import validate from "./StaticZipCodeValidator";

// let strings = ["Hello", "98052", "101"];

// // Use function validate
// strings.forEach(s => {
//   console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
// });

// ## demo3: default导出也可以是一个值
// OneTwoThree.ts
// export default "123";

// Log.ts
// import num from "./OneTwoThree";

// console.log(num); // "123"