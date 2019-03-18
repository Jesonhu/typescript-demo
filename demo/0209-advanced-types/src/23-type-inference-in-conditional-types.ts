// # 类型判断中使用类型推论
namespace typeInferenceInConditionalTypes {
  // ## demo1:
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  // ## demo2: 可以嵌套条件类型，以形成按顺序计算的模式匹配序列
  type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

  type T0 = Unpacked<string>;  // string
  type T1 = Unpacked<string[]>;  // string
  type T2 = Unpacked<() => string>;  // string
  type T3 = Unpacked<Promise<string>>;  // string
  type T4 = Unpacked<Promise<string>[]>;  // Promise<string>
  type T5 = Unpacked<Unpacked<Promise<string>[]>>;  // string

  // ## demo3: 多重条件也可以用在联合类型中. 
  type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
  type T10 = Foo<{ a: string, b: string }>;  // string
  type T11 = Foo<{ a: string, b: number }>;  // string | number

  // ## demo4: 
  type Bar<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
  type T20 = Bar<{ a: (x: string) => void, b: (x: string) => void }>;  // string
  type T21 = Bar<{ a: (x: string) => void, b: (x: number) => void }>;  // string & number

  // ## demo5: 重载中也会这样使用
  declare function foo(x: string): number;
  declare function foo(x: number): string;
  declare function foo(x: string | number): string | number;
  type T30 = ReturnType<typeof foo>;  // string | number

  // ## demo6: 
  // type ReturnType1<T extends (...args: any[]) => infer R> = R;


}