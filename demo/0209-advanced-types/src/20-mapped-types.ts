// # 映射类型
namespace mappedTypes {
  // ## demo1: 每个属性都是可选的.
  interface IPersonPartial {
    name?: string;
    age?: number;
  }

  // 或者是这个版本
  interface IPersonReadonly {
    readonly name: string;
    readonly age: number;
  }

  // ## demo2: 针对上面的情况，TS 提供了一个从旧类型中创建新类型的一种方式 -- `映射类型`
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type Partial<T> = {
    [P in keyof T]?: T[P];
  }

  interface IPerson {
    name: string;
    age: number;
  }

  // 这样使用
  type PersonPartial = Partial<IPerson>;
  type PersonReadonly = Readonly<IPerson>;

  // ## demo3: 最简单的映射类型和组成部分.
  type Keys = 'option1'| 'option2';
  type Flags = { [K in Keys] : boolean };

  // 等价于
  type MyFlags = {
    option1: boolean;
    option2: boolean;
  }

  // ## demo3: 
  // 在真正的应用里，可能不同于上面的 Readonly 或 Partial。 
  // 它们会基于一些已存在的类型，且按照一定的方式转换字段。 这就是 keyof 和 `索引访问类型` 要做的事情。
  class Person {
    constructor() {}
  }
  type NulllablePerson = {
    [P in keyof IPerson]: IPerson[P]|null
  }
  type PartialPerson = {
    [P in keyof IPerson]?: IPerson[P]
  }
  // 更通用的版本
  type Nullable<T> = {
    [P in keyof T]: T[P]|null
  }
  // 如 demo2: Partial

  // ## demo3: T[P] 被包装在 Proxy<T> 类中.
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }
  function proxify<T>(o: T): Proxify<T> {
    let a: Proxify<T> = {} as Proxify<T>;

    return a;
  }
}