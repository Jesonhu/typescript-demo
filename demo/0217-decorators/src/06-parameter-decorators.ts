import 'reflect-metadata';
// # 参数装饰器

// 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 参数2：成员的名字。
// 参数3：参数在函数参数列表中的索引。

namespace parameterDecorators {
  // ## demo1: 参数装饰器简单示例.
  const requiredMetadataKey = Symbol('required');

  /**
   * 参数装饰器. 
   */
  function required(target: Object, propertyKey: string|symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) 
    || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
  }

  /**
   * 方法装饰器.
   */
  function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value as Function;
    descriptor.value = function () {
      let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
      if (requiredParameters) {
          for (let parameterIndex of requiredParameters) {
              if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                  throw new Error("Missing required argument.");
              }
          }
      }
      return method.apply(this, arguments);
    }
  }

  class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
  }
}