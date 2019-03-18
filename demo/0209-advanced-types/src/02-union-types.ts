// # 联合类型
namespace unionTypes {
  // ## demo1: 参数的类型不定
  /**
   * 
   * padding 的类型可以为字符串或者数字
   * 
   * @param {string} value 值
   * @param {number|string}
   */
  function padLeft(value: string, padding: number|string): string {
    // padding 为 数字
    if (typeof padding === 'number') {
      return Array(padding + 1).join(' ') + value;  
    }

    // padding 为字符串时
    if (typeof padding === 'string') {
      return padding + value;
    }
  }

  let value1 = padLeft('hello world', 4);
  console.log(value1);

  const value2 = padLeft('hello world', '3px');
  console.log(value2);

  // ## demo2: 值如果是一个联合类型，可以访问联合类型的所有类型里共有的成员.
  interface IBird {
    fly(): void;
    layEggs(): void;
  }

  interface IFish {
    swim(): void;
    layEggs(): void;
  }

  function getSmallPet(): IFish | IBird {
    let res: IFish | IBird;

    return res;
  }

  let pet = getSmallPet();
  pet.layEggs();

  // 不是联合类型公共的部分，这里报错了.
  // pet.fly();
}