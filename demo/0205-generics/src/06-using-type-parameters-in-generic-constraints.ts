// # 在泛型约束中使用类型参数
namespace usingTypeParametersInGenericConstraints {
  // ## demo1: 想要获取一个属性值，但是这个属性需要从某个对象上获取，
  // 为了确保这个属性存在于这个对象上，我们可以在两个类型之间使用约束.
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  export const x = {a: 1, b: 2, c: 3, d: 4};
  getProperty(x, 'a');
  
  // Error: 不存在 .m
  // getProperty(x, 'm');
}

console.log(usingTypeParametersInGenericConstraints.x);