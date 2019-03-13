// # 类类型--类实现一个接口
interface IClockInterface {
  currentTime: Date

  // 描述一个方法
  setTime(d: Date): void

  // 描述一个方法，并指定返回类型
  getTime(): Date

  // 指定类型为 Clock, 这里感觉有点问题。如果现有接口，没有 Clock 类的话，接口这里就会报错.
  getClock(): Clock
}

class Clock implements IClockInterface {
  constructor(hours: number, minutes: number) {}
  // 这就实现了：囧，实际中可能会进行一系列的操作实现.
  currentTime: Date

  setTime(d: Date) {
    this.currentTime = d;
  }

  getTime() {
    return this.currentTime
  }

  getClock() {
    return this
  }
}
