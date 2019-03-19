// # 创建模块结构指导

// ## 使用命名空间导入模式当你要导出大量内容的时候
// 模块部分 MyLargeModule.ts
// export class Dog { ... }
// export class Cat { ... }
// export class Tree { ... }
// export class Flower { ... }

// 使用 Consumer.ts
// import * as myLargeModule from "./MyLargeModule";
// let x = new myLargeModule.Dog();
