import { Observable } from "./observable";

// 使用扩展模块来告诉编译器.
declare module "./observable" {
    interface Observable<T> {
      // 1. map 函数返回 Observalbe<>
      // 2. map 函数接收一个函数类型的参数，此函数返回 U，参数为x T 类型.
      map<U>(f: (x: T) => U): Observable<U>;
    }
}
Observable.prototype.map = function (f) {
  // ... another exercise for the reader
}