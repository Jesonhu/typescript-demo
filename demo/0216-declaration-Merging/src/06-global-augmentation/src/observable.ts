export class Observable<T> {
  // ... still no implementation ...
}

// 当前对象导出了，作为外部模块使用。因此这里可以使用当前方式定义全局扩展.
// 全局扩展
declare global {
  interface Window {
    /** 全局 aaa */
    aaa: string
  }
}