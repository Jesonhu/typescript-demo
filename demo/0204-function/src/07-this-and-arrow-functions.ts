// # this
namespace mThis {
  // ## demo1: 返回的函数，使用箭头函数，解决 this 的问题.
  const goods = {
    clothes: ['外套', '上衣', '下衣', '内衣'],
    cards: Array(52),
    createCardPicker: function() {
      return () => {
        const pickedCard = Math.floor( Math.random() * 52 );
        const pickedClothes = Math.floor( pickedCard / 13 );

        return {
          clothes: this.clothes[pickedClothes],
          card: pickedCard % 13
        }
      }
    }
  }

  // ## demo2: 添加 this 提示, v3.3.3333 以上写法 this 已经可以正常提示了，下面我们来使用接口描述下
  interface ICard {
    clothes: string;
    card: number;
  }

  interface IGoods {
    clothes: string[];
    cards: number[];
    createCardPicker(this: IGoods): () => ICard;
  }

  const goods1: IGoods = {
    clothes: ['外套', '上衣', '下衣', '内衣'],
    cards: Array(52),
    createCardPicker: function(this: IGoods) {
      return () => {
        const pickedCard = Math.floor( Math.random() * 52 );
        const pickedClothes = Math.floor( pickedCard / 13 );

        return {
          clothes: this.clothes[pickedClothes],
          card: pickedCard % 13
        }
      }
    }
  }
}