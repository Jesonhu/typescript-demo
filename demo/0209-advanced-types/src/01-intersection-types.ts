// # 交叉类型
namespace intersectionTypes {
  // ## demo1: 混入
  function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    // T
    for (let id in first) {
      (<T>result)[id] = (<T>first)[id];
    }

    // U
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = (<U>second)[id];
      }
    }

    return result;
  }

  class Person {
    constructor(public name: string) {
      
    }
  }
}