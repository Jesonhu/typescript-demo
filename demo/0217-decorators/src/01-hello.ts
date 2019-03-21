namespace helloDecorator {
  // 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 
  // 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
  // ## demo1: 基本例子.
  function sayHi() {
    console.log('sayHi()----执行');
    return function(target: any, propertyKey: string,) {
      console.log('sayHi()----被调用');
    }
  }
  function sayOk() {
    console.log('sayOk()----执行');
    return function(target: any, propertyKey: string,) {
      console.log('sayOk()----被调用');
    }
  }
  class Animal {
    @sayHi()
    @sayOk()
    hello() {
      console.log('hello animaml');
    }
  }
}
