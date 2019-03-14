// # 剩余参数
namespace restParameter {
  // ## demo1: 剩余参数基本案例.
  function createName(firstName: string, ...restOfName: string[]) {
    return firstName +'·'+ restOfName.join('·');
  }

  const studentName = createName('赵', '钱', '孙', '李', '尼古拉斯');
  console.log('名字为: ', studentName);
  // => '赵·钱·孙·李·尼古拉斯'

  // ## demo2: 剩余参数的函数类型定义.
  const workderName: (fName: string, ...rest: string[]) => string = createName;

}
