// # 命名中间里面使用 export
// 如果想让命名空间中的某些接口和类可以在命名空间外访问，需要使用 `export`,
// 实现的细节不需要导出, 没有 `导出` 也就意味着：命名空间外是不能访问的.
namespace Validation {
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
          return lettersRegexp.test(s);
      }
  }

  export class ZipCodeValidator implements StringValidator {
      isAcceptable(s: string) {
          return s.length === 5 && numberRegexp.test(s);
      }
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
// 外部使用.
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
      console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}