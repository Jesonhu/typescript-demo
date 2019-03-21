// # 访问器装饰器.
namespace accessorDecorators {
  // ## demo1: 基本例子
  class Point {
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }
    private _x: number
    private _y: number
    
    @configurable(false)
    get x() {
      return this._x;
    }

    @configurable(true)
    get y() {
      return this._y;
    }
  }

  /**
   * 是否可配置装饰器.
   * 
   * @param {boolean} value 是否可以配置(true: 可以配置，false: 不能配置).
   * @return {Function} 装饰器的具体操作函数.
   */
  function configurable(value: boolean) {
    return (target: any, propertyKey: string, descripor: PropertyDescriptor) => {
      descripor.configurable = value;
    }
  }

  const point = new Point(2, 3);
}