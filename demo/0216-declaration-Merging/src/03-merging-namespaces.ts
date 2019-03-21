// # 合并声明空间

  // ## demo1: 命名空间合并简单案例
  namespace Animals {
    export class Zebra {}
  }
  namespace Animals {
    export interface ILegged {
      numberOfLegs: number
    }
    export class Dog {}
  }

  // 编译器合并后的效果为:
  // Notice: 两个相同命名空间，导出同样的值是不被允许的，
  // namespace Animals {
  //   export interface ILegged {}

  //   export class Zebra { }
  //   export class Dog { }
  // }

  // ## demo2 非导出成员仅在其原有的（合并前的）命名空间内可见。
  // 这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
  namespace Animal {
    const haveMuscles = true;

    export const isMuscles: boolean = true;

    export function animalsHaveMuscles() {
      return haveMuscles;
    }
  }

  namespace Animal {
    export function doAnimalHaveMuscles() {
      // Error: haveMuscles非导出成员即使在同一个命名空间下也不能访问.
      // return haveMuscles
    }

    // 导出后是可以访问的。
    export function doAnimalIsMusles() {
      return isMuscles;
    }
  }