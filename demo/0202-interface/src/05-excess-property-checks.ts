// # 假如定义了一个接口，作为参数使用，发现存在会传递一个未定义属性的情况，可以使用如下解决方案
interface ICircle {
  color: string,
  radius: number,

  // 泛属性.
  [propName: string]: any
}

let circle: ICircle = {color: 'red', radius: 10, width: 100}
// Notice: 由于存在 `[propName: string]: any` 属性中包括 width: 100 也不会报错。

// 虽然不报错，但是：使用这如果将 `colour` 当成 `color` 来使用就会出错。推荐进行提示.

function createCircle(options: ICircle): ICircle {
  const circle = {color: options.color, radius: options.radius}

  if (options.colour) {
    console.log('需要的属性为 color, 请将 colour 改为 color');
  }

  // 一些逻辑

  return circle;
}

const circleParam2: ICircle = {color: 'red', radius: 10, colour: 'red'}
const circle2 = createCircle(circleParam2);