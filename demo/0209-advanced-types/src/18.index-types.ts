// # 索引类型
namespace indexTypes {
  // ## demo1: 使用索引类型，编译器就能够检查使用了动态属性名的代码
  // 从对象中选取属性的子集.
  function pluck(o: any, names: any[]) {
    return names.map(n => o[n]);
  }

  // ## demo2: 通过 `索引类型查询` 和 `索引访问` 操作符.
  function pluck2<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }
  // Notice: keyof T: `索引类型查询操作符`
  // Notice: T[K]   ：`索引访问操作符`

  interface IPerson {
    name: string;
    age: number;
  }
  const person: IPerson = {
    name: '张三',
    age: 26
  };

  const strings: string[] = pluck2(person, ['name']);
  console.log(strings);

  let personProps: keyof IPerson;
  let person2Props: 'name' | 'age';
  // Notice: 在这个例子中 keyof IPerson 相当于 'name' | 'age' 但是这种写法扩展后就要添加太麻烦了.

  // ## demo2: 
  function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name];
  }
  // Notice: o: T和 name: K，意味着 o[name]: T[K]

}