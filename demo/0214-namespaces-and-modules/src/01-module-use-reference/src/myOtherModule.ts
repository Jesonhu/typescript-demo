import * as m from 'thirdLib';

// Notice: 假如一个某第三方库没有 `.d.ts` 或用 `.js` 编写的。
// 没有 .d.ts 我们直接 import * as m from 'thirdLib'; 'thirdLib' 会在 js 中报错的，
// 这时我们可以定义一个 'd.ts' : declare module 'thirdLib'. 类名与引入的类名一致，就可以阻止报错。
// ///<reference path="thirdLib.d.ts" />
// 里的引用标签指定了外来模块的位置。 这就是一些TypeScript例子中引用 node.d.ts的方法。

m.fn