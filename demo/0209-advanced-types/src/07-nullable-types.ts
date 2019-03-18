// # 可以为 null 的类型.
namespace nullableTypes {
  // ## demo1: 声明一个变量时，不会自动包含 null 或 undefined
  let s: string = 'foo';

  // 如果 --strictNullChecks: false 的时候是不会报错的。
  // s = null

  // 使用联合类型来明确包含
  let sn: string | null = 'bar';
  sn = null;
}