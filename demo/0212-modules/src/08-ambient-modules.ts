// # 外部模块

// ## demo1: 在Node.js里大部分工作是通过加载一个或多个模块实现的。 
// 我们可以使用顶级的 export声明来为每个模块都定义一个.d.ts文件，
// 但最好还是写在一个大的.d.ts文件里。 我们使用与构造一个外部命名空间相似的方法，
// 但是这里使用 module关键字并且把名字用引号括起来，方便之后import。 例如：

// node.d.ts
// declare module "url" {
//   export interface Url {
//       protocol?: string;
//       hostname?: string;
//       pathname?: string;
//   }

//   export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
// }

// declare module "path" {
//   export function normalize(p: string): string;
//   export function join(...paths: any[]): string;
//   export let sep: string;
// }

// 加载模块
// /// <reference path="node.d.ts"/>
// import * as URL from "url";
// let myUrl = URL.parse("http://www.typescriptlang.org");

// ## demo2: 外部模块简写
// 假如你不想在使用一个新模块之前花时间去编写声明，你可以采用声明的简写形式以便能够快速使用它
// declarations.d.ts
// declare module "hot-new-module";

