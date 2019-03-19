// # 外部命名空间
// “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，
// 这是为了与 ECMAScript 2015里的术语保持一致，(也就是说 module X { 相当于现在推荐的写法 namespace X {)

// 流行的程序库D3在全局对象d3里定义它的功能。 
// 因为这个库通过一个 <script>标签加载（不是通过模块加载器），它的声明文件使用内部模块来定义它的类型。 
// 为了让TypeScript编译器识别它的类型，我们使用外部命名空间声明。 比如，我们可以像下面这样写：
declare namespace D3 {
  export interface ISelectors {
    select: {
      (selector: string): ISelectors;
      (element: EventTarget): ISelectors;
    }
  }

  export interface IEvent {
    x: number;
    y: number;
  }

  export interface IBase extends ISelectors {
    event: IEvent
  }
}

declare var d3: D3.IBase;
