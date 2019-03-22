// # 混入示例
namespace mixinSample {
  // ## demo1: 简单的混入例子
  class Feature1 {
    isDisposed: boolean
    dispose() {
      this.isDisposed = true;
    }
  }

  class Feature2 {
    isActive: boolean
    activate() {
      this.isActive = true;
    }
    deactivate() {
      this.isActive = false;
    }
  }

  class NewFeature implements Feature1, Feature2 {
    constructor() {
      setInterval(() => {
        console.log(this.isActive + ' : ' + this.isDisposed);
      }, 500);
    }
    interact() {
      this.activate();
    }

    // 这里需添加继承的描述，可以不实现功能,占位属性.
    // 这里的作用：为了在新类中使用两个 `继承` 的功能而不报错.
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
  }
  applyMixins(NewFeature, [Feature1, Feature2]);

  const newFeature = new NewFeature();
  setTimeout(() => newFeature.interact(), 1000);

  ////////////////////////////////////////
  // In your runtime library somewhere
  ////////////////////////////////////////
  // Notice: 这个函数的功能相当于多继承，新对象的原型对象功能来自于多个原型对象.
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
  }


}