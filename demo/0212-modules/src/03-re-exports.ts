// # 重新导出.
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
      return s.length === 5 && parseInt(s).toString() === s;
  }
}

// ## demo1: 导出原先的验证器但做了重命名
// export {ZipCodeValidator2 as RegExpBasedZipCodeValidator} from "./02-export-statements";
export {mainValidator as RegExpBasedZipCodeValidator} from "./02-export-statements";

// ## demo2: 一个模块可以包裹多个模块，并吧他们导出的内容联合在一起 export * from 'module'，
// 在一个模块中导出多个模块.
export * from './02-export-statements'