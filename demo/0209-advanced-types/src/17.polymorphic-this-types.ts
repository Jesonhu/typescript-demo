// # 多态的 this 类型: 某个包含类或接口的 子类型.被叫做 `F-bounded 多态性`.
namespace polymorphicThisTypes {
  // ## demo1: 多态性可以很容易表现连贯接口间的继承, 比如。在计算器的例子中，在每个操作后都返回 this 类型.
  // 下面看下常规的写法
  class BasicCalculatar {
    constructor(protected value: number = 0) {}
    currentValue(): number {
      return this.value;
    }
    add(operand: number): this {
      this.value += operand;
      return this;
    }
    multply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ... other operations go there ...
  }

  const v1 = new BasicCalculatar(2)
                  .multply(5)
                  .add(1)
                  .currentValue();

  // demo2: 由于使用了 this 类型。你可以继承它，新的类可以直接使用之前的方法.
  class ScientificCalator extends BasicCalculatar {
    constructor(value = 0) {
      super(value);
    }
    sin() {
      this.value = Math.sin(this.value);
      return this;
    }
    // ... other operations go there ...
  }

  const sC = new ScientificCalator(2)
                  .multply(5)
                  .sin()
                  .add(1)
                  .currentValue();

}