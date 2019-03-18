// # 类型别名
namespace typeAliases {
  // ## demo1: 基本示例 类型别名
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;

  function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
      return n;
    } else {
      return n();
    }
  }

  // ## demo2: 类型别名也可以是泛型.
  type Container<T> = {value: T};

  // ## demo3: 也可以使用类型别名属性来引用自己
  type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
  }

  // ## demo4: 与交叉类型一起使用，可以创建出一些十分古怪的类型
  type LinkedList<T> = T & {next: LinkedList<T>};

  interface IPerson {
    name: string;
  }

  let people: LinkedList<IPerson>;

  // Notice: 这里有报错
  // let s = people.name;
  // let s = people.next.name;

  // demo5: 类型别名不能出现在声明右侧的任何地方.
  // Error:
  // type Yikes = Array<Yikes>;
}