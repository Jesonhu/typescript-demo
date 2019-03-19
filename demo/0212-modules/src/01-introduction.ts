// # 介绍
namespace introduction {
  // ## demo1: 导出接口.
  export interface IStringValidator {
    isAcceptable(s: string): boolean
  }

  // ## demo2: 导出变量
  export const numberRegexp = /^[0-9]+$/;

  // ## demo3: 导出类
  export class ZipCodeValidator implements IStringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}