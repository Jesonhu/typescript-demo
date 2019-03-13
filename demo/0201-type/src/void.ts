// void 类型像是与any类型相反，它表示没有任何类型

// function fn1() {}
// Notice: 不同文件，同名函数会提示错误

// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function void_fn1() {}
// 没有指定返回对象，此时的返回对象类型为 void

function void_fn2(): void {
  // return '1'
}
// 指定了返回类型 void. 函数就不能返回内容.