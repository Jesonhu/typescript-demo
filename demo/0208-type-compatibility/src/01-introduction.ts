// # 介绍: 结构子类型的
namespace introduction {
  // ## demo1:
  interface Named {
    name: string;
  }

  class Person {
    name: string
  }

  let p: Named;
  p = new Person();

  // 在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口。
  // TypeScript的结构性子类型是根据JavaScript代码的典型写法来设计的。 因为JavaScript里广泛地使用匿名对象，
  // 例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好
}