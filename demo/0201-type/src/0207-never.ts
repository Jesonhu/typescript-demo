// 返回内容无法达到的终点
function error(msg: string): never {
  throw new Error(msg);
}

// 自己推断为 never 类型
function never_fail1() {
  throw error('Something failed');
  // 这里的 error 指上面的函数，也可以取名其他
}

// never 是任何类型的子类型，包括 void
function never_fn1(): never {
  throw error('Something failed');
}

function mError(msg: string): never {
  throw new Error(msg);
}

// 推断为返回值类型为 never 类型
function never_fail2() {
  throw mError('Something failed');
}

// never 是任何类型的子类型，包括 void
function never_fn2(): never {
  throw mError('Something failed');
}


// 返回内容无法达到的终点
function never_infiniteLoop(): never {
  while(true) {

  }
}
