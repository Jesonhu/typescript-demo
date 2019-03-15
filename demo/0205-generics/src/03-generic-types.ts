// # 泛型类型
namespace genericTypes {
  // ## demo1: 泛型函数
  function idenity<T>(arg: T): T {
    return arg;
  }

  // <T>(arg: T) => T 这是一个泛型类型.
  const myIdenity: <T>(arg: T) => T = idenity;

  const myOtherIdenity: <U>(arg: U) => U = idenity;

  // ## demo2: 使用带有调用前面的对象字面量来定义泛型函数
  const mySecond: {<T>(arg: T): T} = idenity;

  // ## demo3: 泛型接口, 将上面的对象字面量拿来作为一个接口使用
  interface IGenericIdentityFn {
    <T>(arg: T): T
  }

  const myThirdIdentity: IGenericIdentityFn = idenity;

  // ## demo4: 
  interface IDictionary<T> {
    (arg: T): T
  }

  const myFourIdentity: IDictionary<number> = idenity;

}