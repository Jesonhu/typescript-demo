import "reflect-metadata";

// # 属性装饰器
namespace propertyDecorators {
  // ## demo1: 基本例子.
  // 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
  // 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  // 参数2：成员的名字。

  const formatMetadataKey = Symbol("format");

  /**
   * 格式化装饰器. 
   * 
   * @param {any} formatString 需要装饰的属性
   * @param {Function} 属性装饰器处理的函数.
   */
  function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
  }

  function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }

  class Greeter {
    @format('hello, %s')
    greeting: string
    constructor(msg: string) {
      this.greeting = msg;
    }
    greet() {
      const formatString = getFormat(this, 'greeting');
      return formatString.replace('$s', this.greeting);
    }

  }
}