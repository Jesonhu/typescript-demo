// # 合并命名空间和类

// ## demo1: 这让我们可以表示内部类.
class Album {
  label: Album.AlbumLabel
}
namespace Album {
  export class AlbumLabel {
  }
}
// Notice: 合并规则与上面 合并命名空间小节里讲的规则一致，我们必须导出 AlbumLabel类，好让合并的类能访问。 
// 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性

// ## demo2: 在JavaScript里，创建一个函数稍后扩展它增加一些属性也是很常见的。 
// TypeScript使用声明合并来达到这个目的并保证类型安全。
// Notice: 这里我们已经声明了一个函数了，但是只有形参，
// `buildLabel.prefix` 和 `buildLabel.suffix` 是扩展的属性，通过命名空间扩展。
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix: string = '';
  export let prefix: string = 'Hello, ';
}


console.log(buildLabel('Sam Smith'));

// ## demo3: 命名空间可以用来扩展枚举型(PS: 不明白什么情况下是扩展了枚举)
enum Color {
  red = 1,
  green = 2,
  blue = 4
}
namespace Color {
  export function mixColor(colorName: string) {
    if (colorName === 'yellow') {
      return Color.red + Color.green;
    }

    if (colorName === 'white') {
      return Color.red + Color.green + Color.blue;
    }

    if (colorName === 'magenta') {
      return Color.red + Color.blue;
    }

    if (colorName === 'cyan') {
      return Color.green + Color.blue;
    }

    return 0;
  }
}

console.log( Color.mixColor('yellow') );
console.log('Color', Color);
console.log( Color[ Color.mixColor('yellow') ] );

// ## demo
