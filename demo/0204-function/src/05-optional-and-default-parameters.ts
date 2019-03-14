// # 可选参数和默认参数
namespace optionalAndDefaultParamenters {
  // ## demo1: 可选参数
  function createName(firstName: string, lastName?: string) {
    let name: string = ''
    
    if (lastName) {
      name = `${firstName} ${lastName}`;
    } else {
      name = firstName;
    }

    return name;
  }

  const name1 = createName('赵');
  console.log(name1);
  // => '赵'

  const name2 = createName('赵', '尼古拉斯');
  console.log(name2);
  // => '赵 尼古拉斯'

  // ## demo2: 默认参数
  function buildName(firstName: string, lastName = '二狗') {
    return `${firstName} ${lastName}`;
  }

  const name3 = buildName('赵');
  console.log(name3);
  // => '赵 二狗'

  const name4 = buildName('赵四', '·尼古拉斯');
  console.log(name4);
  // => '赵四 ·尼古拉斯'
}