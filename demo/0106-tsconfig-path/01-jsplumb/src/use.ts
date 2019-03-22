import * as jsplumb from 'jsplumb';

// Notice: ts中引入模块 'jsplumb' 报错了，尝试解决问题
// 1. 是否有 .d.ts: 有，但是模块的声明为: declare module jsPlumb {}, 不是字符串的方式。我们如何解决呢?
// 2. 更改 `tsconfig.json`, 添加 "paths" 说明文档. 由于改动了 "paths" 还需要添加 "baseUrl"
// 3. import jsplumb from 'jsplumb'; 发现报错，提示，没有默认导出。改为 `import * as jsplumb from 'jsplumb';` 问题解决.

// console.log(jsplumb);