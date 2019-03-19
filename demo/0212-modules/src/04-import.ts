// # 导入

// ## demo1: 导入一个模块中的某些内容.
import { ZipCodeValidator2 } from './02-export-statements'

namespace myImport {
  let myValidator = ZipCodeValidator2;
  console.log(ZipCodeValidator2)
}