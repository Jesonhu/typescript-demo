// # 只读属性的数组
let arr1: Array<number> = [1, 2, 3, 4];
let roArr1: ReadonlyArray<number> = arr1;

// Ok
arr1[0] = 2;

// Error
// roArr1[0] = 2;
// 设置为了只读数组，这里不能进行设置



