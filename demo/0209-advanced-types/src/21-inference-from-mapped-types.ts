// # 由映射类型进行推断 ??
namespace inferenceFromMappedTypes {
  // ## demo1: 回顾下上例的包装一个属性 
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
  const person = {
    name: '张三',
    age: 12
  }
  const proxyProps = proxify(person.age);

  // ## demo2: 那么接下来就是如何拆包
  function unproxify<T>(t: Proxify<T>): T {
    const result = {} as T;
    for (const k in t) {
      result[k] = t[k].get();
    }
    return result;
  }

  // const originalProps = unproxify(proxyProps);
}