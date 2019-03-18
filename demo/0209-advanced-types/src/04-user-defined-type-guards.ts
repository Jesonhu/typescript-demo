// 用户自定义的类型保护
namespace userDefinedTypeGuards {
  // ## demo1: 回顾下上面的例子，不得不多次使用类型断言，假若我们一旦检查过类型，就能在之后的每个分子里清楚的知道类型就好了
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

  // 通过断言避免报错
  if ((<IFish>pet).swim) {
    (<IFish>pet).swim();
  } else {
    (<IBird>pet).fly()
  }

  // ## demo2: 可以通过类型保护机制(关键词: 类型谓词) 
  // parameterName is Type, parameterName 必须来自于当前函数签名里的一个参数名.
  function isFish(pet: IFish | IBird): pet is IFish {
    return (<IFish>pet).swim !== undefined;
  }

  // 'swim' 和 'fly' 调用都没有问题了.
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }

}