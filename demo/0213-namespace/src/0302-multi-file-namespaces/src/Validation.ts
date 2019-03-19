// ## 多个文件中的命名空间--只是接口
namespace Validation {
  /**
   * 接口. 
   */
  export interface IStringValidator {
    isAcceptable(s: string): boolean;
  }
}