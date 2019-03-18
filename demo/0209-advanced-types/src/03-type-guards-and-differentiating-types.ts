// # 类型包含与区分类型
namespace typeGuardsAndDifferentiatingTypes {
  // ## demo1: 如果我们在定义体内访问联合类型，各种不同的地方怎么办？
  // ts 直接访问会报错，而在 js 中我们可以通过检查成员是否存在来处理。
  // 可以通过 断言 来避免报错.
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

  // 这里直接访问报错了。
  // if (pet.swim) {

  // } else {

  // }

  // 通过断言避免报错
  if ((<IFish>pet).swim) {
    (<IFish>pet).swim();
  } else {
    (<IBird>pet).fly()
  } 
}