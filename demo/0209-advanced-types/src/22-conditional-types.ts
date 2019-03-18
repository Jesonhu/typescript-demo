// 条件类型
namespace conditionalTypes {
  // ## demo1: v2.8 以后引入的
  // T extends U ? X : Y
  declare function fn<T extends boolean>(x: T): T extends true ? string : number;

  const x = fn(Math.random() < 0.5);

  // ## demo2: 另一个例子
  type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean':
    T extends undefined ? 'undefined':
    T extends Function ? 'function' :
    'object';

  type T0 = TypeName<string>;
  type T1 = TypeName<'a'>;
  type T2 = TypeName<true>;
  type T3 = TypeName<() => void>;
  type T4 = TypeName<string[]>;

  // ## demo2: 延缓推论
  interface IFoo {
    propA: boolean;
    propB: boolean;
  }

  declare function fn<T>(x: T): T extends IFoo ? string : number;

  function foo<T>(x: T) {
    const a = fn(x);

    // Notice: 这里需要指定全部可能出现的类型
    const b: string | number = a;
  }
  // Notice: 当 foo 被调用的时候，a 才会选择对应的分支

  // ## demo3: 分配条件类型.可以推断出具体可能出现的类型.
  type T10 = TypeName<string | (() => void)>;
  type T12 = TypeName<string | string[] | undefined>;
  type T11 = TypeName<string[] | number[]>;

  // ## demo4: 
  type BoxedValue<T> = {value: T};
  type BoxedArray<T> = {array: T[]};
  type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

  type T20 = Boxed<string>; 
  type T21 = Boxed<number[]>;
  type T22 = Boxed<string | number[]>;

  // ## demo4: 分配
  type Diff<T, U> = T extends U ? never : T;
  type Filter<T, U> = T extends U ? T : never;

  type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  // "b" | "d"
  type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  // "a" | "c"
  type T32 = Diff<string | number | (() => void), Function>;
  // string | number
  type T33 = Filter<string | number | (() => void), Function>;
  // () => void

  type NonNullable<T> = Diff<T, null | undefined>;
  // Remove null and undefined from T

  type T34 = NonNullable<string | number | undefined>;
  // string | number
  type T35 = NonNullable<string | string[] | null | undefined>;
  // string | string[]

  function fn1<T>(x: T, y: NonNullable<T>) {
    x = y;
    
    // Error 
    // y = x;
  }

  function fn2<T extends string | undefined>(x: T, y: NonNullable<T>) {
    x = y;
    // y = x; Error

    // Error
    // let s1: string = x; 
    let s2: string = y;
  }

  // ## demo5: 条件类型在合并映射类型时特别有效
  type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ?  K : never
  }[keyof T];
  type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
  
  type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K
  }[keyof T];
  type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

  interface IPart {
    id: number;
    name: string;
    subparts: IPart[];
    updatePart(newName: string): void;
  }
  type T40 = FunctionPropertyNames<IPart>;
  // "updatePart"
  type T41 = NonFunctionPropertyNames<IPart>;
  // "id" | "name" | "subparts"
  type T42 = FunctionProperties<IPart>;
  // { updatePart(newName: string): void }
  type T43 = NonFunctionProperties<IPart>;
  // { id: number, name: string, subparts: Part[] }

  // ## demo6: 条件类型不能递归通过条件类型判断自己的类型.
  // Error: 类型别名“ElementType”循环引用自身
  // type ElementType<T> = T extends any[] ? ElementType<T[number]> : T;

}