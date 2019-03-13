// 元组 Tuple
let tup1: [string, number];

// correctly
tup1 = ['hello', 10];

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




