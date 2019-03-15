// # 可选参数及剩余参数
namespace optionalParametersAndRestParameters {
  // ## demo1: 
  interface ICallback {
    (...args: any[]): void
  }

  function invokeLater(args: any[], callback: ICallback) {
    /* 调用带有参数的回调函数 */
  }

  const cb1: ICallback = (x, y) => {
    console.log(x + ', '+ y);
  }
  invokeLater([1, 2], cb1);

  const cb2: ICallback = (x?, y?) => {
    console.log(x + ', '+ y);
  }
  invokeLater([1, 2], cb2);
}