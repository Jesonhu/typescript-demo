// # 属性装饰器
namespace propertyDecorators {
  // ## demo1: 基本例子.
  /**
   * 格式化装饰器. 
   * 
   * @param {any} target 需要装饰的属性
   * @param {Function} 属性装饰器处理的函数.
   */
  function format(target: string) {
    return (target: any, key: string) => {

    }
  }

  function getFormat(target: any, propertyKey: string) {
    return '';
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