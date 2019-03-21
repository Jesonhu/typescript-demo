import 'reflect-metadata';

// # 元数据
namespace metadata {
  // --emitDecoratorMetadata 开启元数据功能
  // ## demo1: 
  class Point {
    x: number
    y: number
  }
  class Line {
    private _p0: Point
    private _p1: Point

    @validate
    set p0(value: Point) {
      this._p0 = value;
    }
    get P0() {
      return this._p0;
    }

    @validate
    set p1(value: Point) {
      this._p1 = value;
    }
    get p1() {
      return this._p1;
    }
  }

  function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    /** set  */
    const set = descriptor.set as Function;
    descriptor.set = (value: T) => {
      const type = Reflect.getMetadata('design:type', target, propertyKey);
      if (!(value instanceof type)) {
        throw new TypeError('Invailid type.');
      }
      set(value);
    }
  }

  // ## demo2: 注入社会姐阶段的类型信息.
  class MyLine {
    private _p0: Point
    private _p1: Point

    @validate
    @Reflect.metadata('design:type', Point)
    set p0(value: Point) {
      this._p0 = value;
    }
    get p0() {
      return this._p0; 
    }

    @validate
    @Reflect.metadata('design:type', Point)
    set p1(value: Point) {
      this._p1 = value;
    }
    get p1() {
      return this._p1;
    }
  }
}