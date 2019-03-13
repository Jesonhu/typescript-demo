// 元组 Tuple
let tup1: [string, number];

// correctly
tup1 = ['hello', 10];

// 或者使用这种方式创建元组
const tup2: [number, string] = [1, 'hello'];

// incorrectly
// tup1 = ['hello', 10, 12]
// Notice: 这里超过了指定长度

// incorrectly
// tup1 = [10, 'hello'];
// Notice: 类型不匹配

// correctly
tup1[0].split('');

// incorrectly
// tup1[1].split('');
// Notice: 数字不存在 'split' 方法.

// incorrectly
// tup1[2] = 'word';
// tup1[2].split();

// const str: string = 'word';
// tup1[3] = str;




