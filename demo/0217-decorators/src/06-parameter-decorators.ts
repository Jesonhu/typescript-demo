import 'reflect-metadata';
// # 参数装饰器
namespace parameterDecorators {
  // ## demo1: 参数装饰器简单示例.
  const requiredMetadataKey = Symbol('required');

  function required(target: Object, propertyKey: string|symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) 
    || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
  }

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