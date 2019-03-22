// # 固定元素
declare namespace JSX {
  // Notice: 接口 `IntrinsicElements` 是固定的命名，为了实现当前的功能不能改为其他值.
  interface IntrinsicElements {
    foo: any;
  }
}

// jsx 需要 设置为 `preserve` 模式 ???
<foo />

// ## demo2: 捕获所有字符串索引
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

<bar/>

