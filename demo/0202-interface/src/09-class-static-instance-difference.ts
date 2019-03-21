// # 类静态部分与实例部分的区别
namespace classStaticInterface {
  // ## demo1: 
  // 构造器签名(接口，new方式)
  // interface ClockConstructor {
  //   new (hour: number, minute: number);
  // }

  // class Clock1 implements ClockConstructor {
  //   constructor(hours: number, minutes: number) {}
  //   currentTime: Date
  // }
  // Notice: 以上写法会报错(TS 3.3.33), 问题出现在接口构造器签名部分.当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

  // ## demo2
  // 改进上面的写法
  // Notice: 这个例子有问题，没有使用到 `ClockConstructor`
  interface ClockConstructor {
    new (hour: number, minute: number): IClockInterface
  }

  interface IClockInterface {
    setTime(d: Date): void

    setTime2(d: Date): void
  }

  export class Clock2 implements IClockInterface {
    constructor(hours: number, minutes: number) {}

    // 与接口定义的参数不一致也可以
    setTime() {}

    setTime2(d: Date) {}
  }


  // ## demo3 更近一步，加点料
  // 这个接口仍然为构造器签名(构造函数接口)，但是返回的值可以指向一个普通的接口，
  // 当这个普通的接口作为类接口时，就可以完成：即描述了构造函数部分，又描述了实例部分的功能
  interface IClockConstructor {
    new (hour: number, minute: number): IClockInterface
  }

  interface IClockInterface {
    setTime(d: Date): void

    setTime2(d: Date): void
  }

  export class Clock implements IClockInterface {
    constructor(hours: number, minutes: number) {}

    // 与接口定义的参数不一致也可以
    setTime() {}

    setTime2(d: Date) {}
  }

  /**
   * 创建一个时间对象.
   * 
   * @param {} ctor   构造函数
   * @param {} hour   小时
   * @param {} minute 分钟
   */
  function createClock(ctor: IClockConstructor, hour: number, minute: number): IClockInterface {
    // 关键在于 `ctor: IClockConstructor` ctor 指一个构造函数。并且类型检查通过了，说明类型指向正确。
    // 也就是说，类实现一个接口是，接口只对类的实例部分进行类型检查，这点是无法更改的。但是我们可以将接口
    // 拆分为两个部分，构造器签名(构造函数接口), 普通的类接口。关键在于: 将构造器签名返回的值类型指向，类接口.
    return new ctor(hour, minute);
  }

  const clock1 = createClock(Clock, 12, 6);
}