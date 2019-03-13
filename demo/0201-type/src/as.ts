// # 类型断言

// 方式1: <>
let asStr1: any = 'string';
let asNum1: any = 1;

// asStr1 由 any 转换为 string 类型
let as_strLen: number = (<string>asStr1).length;

// 将数字转换为了 string 类型。 但数字却没有 split() 方法，字符串才有
let as_str: string[] = (<string>asNum1).split('');

// 避免上面的问题
let asNum2: number = 1;
// let as_str2: string[] = (<string>asNum2).split('');

// 方式2： as
let as_strLen2: number = (asStr1 as string).length;

// let as_str2: string[] = (asNum1 as string).split('');
// 使用泛型方式
let as_str2: Array<string> = (asNum1 as string).split('');

// 该报错的还是会报错
// let as_str3: string[] = (asNum2 as string).split('');