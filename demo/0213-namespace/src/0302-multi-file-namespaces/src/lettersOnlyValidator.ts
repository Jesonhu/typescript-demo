// 现在，我们把Validation命名空间分割成多个文件。 尽管是不同的文件，它们仍是同一个命名空间，
// 并且在使用的时候就如同它们在一个文件中定义的一样。 
// 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。 我们的测试代码保持不变。

/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements IStringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}