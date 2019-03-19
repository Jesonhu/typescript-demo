// # 命名空间的介绍
// 由于之前 `内部模块` 定义的方式是： `module X`, 为了与 ES6 里的术语保持一致。
// (也就是说 module X { 相当于现在推荐的写法 namespace X {)

// ## demo1: 如果不使用命名空间，容易与其他对象产生命名冲突. 如果没有命名空间，会放在全局命名空间下.
namespace Validate {
  interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }

  // Some samples to try
  let strings = ["Hello", "98052", "101"];

  // Validators to use
  let validators: { [s: string]: StringValidator; } = {};
  validators["ZIP code"] = new ZipCodeValidator();
  validators["Letters only"] = new LettersOnlyValidator();

  // Show whether each string passed each validator
  for (let s of strings) {
    for (let name in validators) {
      let isMatch = validators[name].isAcceptable(s);
      console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
  }
}