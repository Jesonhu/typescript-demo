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

  // Notice: 以上写法会报错(TS 3.3.33), 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

  // ## demo2
  // 改进上面的写法
  // interface ClockConstructor {
  //   new (hour: number, minute: number): IClockInterface
  // }

  // interface IClockInterface {
  //   setTime(d: Date): void

  //   setTime2(d: Date): void
  // }

  // export class Clock2 implements IClockInterface {
  //   constructor(hours: number, minutes: number) {}

  //   // 与接口定义的参数不一致也可以
  //   setTime() {}

  //   setTime2(d: Date) {}
  // }


  // ## demo3 更近一步，加点料
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
    return new ctor(hour, minute);
  }

  const clock1 = createClock(Clock, 12, 6);
}