// # 导出语句
namespace exportStatements {
  // ## demo1: 导出接口.

  // Notice: 命名空间里面不能导出 declarations--声明
  // export interface IStringValidator {
  //   isAcceptable(s: string): boolean
  // }

  // 
  export declare interface IStringValidator {
    isAcceptable(s: string): boolean
  }

  // ## demo2: 导出变量
  // export const numberRegexp = /^[0-9]+$/;

  // ## demo3: 导出类
  // export class ZipCodeValidator implements IStringValidator {
  //   isAcceptable(s: string) {
  //     return s.length === 5 && numberRegexp.test(s);
  //   }
  // }

  // ## demo4: 导出语句很便利，因为我们可能需要对导出的部分重命名，所以上面的例子可以这样改写
  // class ZipCodeValidator2 implements IStringValidator {
  //   isAcceptable(s: string) {
  //     return s.length === 5 && numberRegexp.test(s);
  //   }
  // }

  // Error: 命名空间中不允许有导出声明
  // export { ZipCodeValidator2 };
  // export { ZipCodeValidator2 as mainValidator }

}

export interface IStringValidator {
  isAcceptable(s: string): boolean
}

class ZipCodeValidator2 implements IStringValidator {
  isAcceptable(s: string) {
    return s.length === 5;
  }
}

// Error: 命名空间中不允许有导出声明,
// 不放在命名空间里这样导出是可以的.
export { ZipCodeValidator2 };
export { ZipCodeValidator2 as mainValidator }