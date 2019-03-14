// # 默认为 public 
namespace publicByDefault {
  // ## demo1
  class Animal {
    public constructor(name: string) {
      this.name = name;
    }
    public name: string
    public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  const  animal = new Animal('狗');
  animal.move(30);

  // ## demo2
  class Plant {
    constructor(name: string) {
      this.name = name;
    }
    name: string
    photosynthesis(timeDistance: string) {
      console.log(`${this.name} ${timeDistance} 可以进行光合作用`);
    }
  }

  const plant = new Plant('白杨');
  plant.photosynthesis('白天');
}