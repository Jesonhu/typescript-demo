// # 异构枚举: 混合字符串和数字成员，其他类型的混入不支持.
namespace heterogeneousEnums {
  // ## demo1: 枚举每项不一定要类型一致，但是似乎不会这样做
  const a: number = 1;
  const b: string = '2';
  const c: boolean = true;

  // Error: 不能将类型“string”分配给类型“myDirection”。
  // enum myDirection {
  //   A = a,
  //   B = b
  // }

  enum HeDirection {
    A = 0,
    Yes = 'Yes',
  }
  
}