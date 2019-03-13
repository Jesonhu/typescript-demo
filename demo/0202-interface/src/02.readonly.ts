// # 只读属性(支持可选)
interface IPoint {
  readonly x: number
  readonly y: number
  readonly isPoint?: boolean
}

// 只读属性 isPoint 是可选了，这里没有此属性，也不会报错.
let point1: IPoint = {x: 10, y: 20}

// Error
// point1.x = 5;
// Notice: 只读属性这里不能赋值.

