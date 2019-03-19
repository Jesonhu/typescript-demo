// # export = 和 import = require()

// export = 语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。

// 若使用export = 导出一个模块，则必须使用TypeScript的
// 特定语法 import module = require("module") 来导入此模块

// ## demo1:
// ZipCodeValidator.ts
// let numberRegexp = /^[0-9]+$/;
// class ZipCodeValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
// export = ZipCodeValidator;

// Test.ts
// import zip = require("./ZipCodeValidator");

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validator = new zip();

// // Show whether each string passed each validator
// strings.forEach(s => {
//   console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
// });