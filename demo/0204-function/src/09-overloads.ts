// # 重载
namespace overloads {
  // ## demo1: 重载例子1
  const suits = ['A', 'B', 'C', 'D'];

  // 重载1： 接收对象，返回数字
  function pickCard(x: {suit: string; card: number}[]): number;
  
  // 重载2： 接收数字，返回对象
  function pickCard(x: number): {suit: string; card: number};

  // 函数体，非重载
  function pickCard(x: object|number): any {
    if (typeof x == 'object') {

      // Error: 这里报错了.
      // const pickedCard = Math.floor( Math.random() * (x as object).length );
      
      const pickedCard = Math.floor( Math.random() * (x as any).length );
      return pickedCard;
    } else if (typeof x == 'number') {
      const pickedSuit = Math.floor(x / 13);
      return {
        suit: suits[pickedSuit],
        card: x % 13
      }
    }
  }
}