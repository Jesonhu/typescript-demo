// # 字符串字面量类型
namespace StringLiteralTypes {
  // ## demo1: 
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === 'ease-in') {

      } else if (easing === 'ease-out') {

      } else if (easing === 'ease-in-out') {

      }
    }
  }

  const button = new UIElement();
  button.animate(0, 0, 'ease-in');

  // Error: 
  // button.animate(0, 0, 'uneasy');

  // ## demo2: 字符串字面量还可以用于区分函数重载.
  function createElement(tagName: 'img'): HTMLImageElement;
  function createElement(tagName: 'input'): HTMLInputElement;
  // ... more overloads ...
  function createElement(tagName: string): Element {
    let res = {} as Element;

    return res;
  }
}