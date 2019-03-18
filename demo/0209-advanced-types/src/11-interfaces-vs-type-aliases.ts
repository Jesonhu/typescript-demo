// # 接口 vs. 类型别名
namespace interfacesVsTypeAliases {
  // ## demo1: 接口创建新名字，可以在其他任何地方使用，类型别名没有创建新名字
  type Alias = {num: number};
  interface IInterface {
    num: number;
  }
  declare function aliased(arg: Alias): Alias;
  declare function interfaced(arg: IInterface): IInterface;
  // Notice: v3.3.33 版本 aliased 返回的类型显示是字母量.

  // ## demo2: 类型别名不能被 extends 和 implements (自己也不能这样做).
}