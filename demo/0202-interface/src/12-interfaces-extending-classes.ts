// # 接口继承类
namespace interfacesExtendingClasses {
  class Control {
    private state: string
    public isCanControl(): boolean {
      return true;
    } 
  }

  // 虽然接口接口继承了这个接口，但是不会实现类的功能
  interface ISelectableControl extends Control {
    select(): void;

    // 可以从类中继承类的公开实例属性.
    // isCanControl(): boolean
  }
  class Button extends Control implements ISelectableControl {
    select() {}
  }

  class TextBox extends Control {
    select() {}
  }

  // 由于 Image 只实现了这个接口，并不是 Control 的子类，隐藏没有私有属性 state
  // Property 'state' is missing in type 'Image' but required in type 'ISelectableControl'.ts(2420)
  // class Image implements ISelectableControl {
  //   select() {}
  // }

  class Location {}

  const button = new Button();
  const textBox = new TextBox();
  const location = new Location();

  // Error: 属性“state”为私有属性，只能在类“Control”中访问
  // 虽然子类可以实现 ISelectableControl 接口，但是 私有属性 state 只能 Control 类才能访问.
  // button.state
  // textBox.state

  // location.state
}