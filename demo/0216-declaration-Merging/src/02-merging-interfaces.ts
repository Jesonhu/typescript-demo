// 合并接口
namespace mergingInterfaces {
  // ## demo1: 重复的声明接口会进行叠加处理
  interface IBox {
    height: number;
    width: number;
  }
  interface IBox {
    scale: number;
  }

  // ## demo2: 重复的声明如果两次有相同的属性，且类型不一致时合并不了
  interface ICup {
    height: number;
    width: number;
  }

  // Error: 重复声明了属性 `width` 且类型不一致的时候合并出错.
  interface ICup {
    radius: number;
    // width: string;
  }

  // ## demo3: 函数型接口的重载.
  interface ICloner {
    clone(animal: Animal): Animal;
  }
  interface ICloner {
    clone(animal: Sheep): Sheep;
  }
  interface ICloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
  }
  class Animal {}
  class Sheep {}
  class Dog extends Animal {}
  class Cat extends Animal {}

  // 编译器合并后的结果为
  interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Animal): Animal;
    clone(animal: Sheep): Sheep;
  }
  // 注意每组接口里的声明顺序保持不变，但各组接口之间的顺序是后来的接口重载出现在靠前位置。

  // demo4: 合并时顺序的例外情况.
  // Notice: Element、HTMLDivElement、HTMLSpanElement 是内置dom接口。
  interface IDocument {
    createElement(tagName: any): Element;
  }
  interface IDocument {
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'span'): HTMLSpanElement;
  }
  interface IDocument {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: 'canvas'): HTMLCanvasElement;
  }

  // 编译器合并后的效果会像这样. 'canvas'是字符串的子类型，会放在前面.
  interface IDocument {
    createElement(tagName: 'canvas'): HTMLCanvasElement;
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'span'): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  }
}