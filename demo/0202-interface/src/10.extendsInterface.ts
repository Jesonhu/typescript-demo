// # 继承接口
namespace extendsInterface {
  // ## demo1:
  interface IAnimal {
    /** 名字 */
    name: string;
  }
  
  interface IWolf extends IAnimal {
    /** 叫声 */
    call: string
  }


  const dog1 = <IWolf>{}
  dog1.name = '小狼';
  dog1.call = '呜呜...';
  // <IWolf>{} 泛型和对象的组合？ 这是断言的一种写法

  const dog2 = {} as IWolf;
  dog2.name = '小狼';
  dog2.call = '呜呜...'

  // ## demo2 继承多个接口
  // 超人总动员：父亲 巴鲍伯(特点: 强壮)
  interface ISuperFather {
    Stronger: string
  }

  // 超人总动员：母亲 巴荷莉(特点: 弹力)
  interface ISuperMather {
    Elastic: string
  }

  // 超人总动员：小儿子(特点: 强壮)
  interface ISuperBoy extends ISuperFather, ISuperMather {
    MagicalPower: string
  }

  const superBoy = {} as ISuperBoy;
  superBoy.Stronger == '超能';
  superBoy.Elastic = '弹力';
  superBoy.MagicalPower = '各种神奇的能力';
}