// typeof 类型保护
namespace typeofTypeGuards {
  // ## demo1: 类型保护写法
  
  /**
   * 
   * padding 的类型可以为字符串或者数字
   * 
   * @param {string} value 值
   * @param {number|string}
   */
  function padLeft(value: string, padding: number|string): string {
    // padding 为 数字
    if (typeof padding === 'number') {
      return Array(padding + 1).join(' ') + value;  
    }

    // padding 为字符串时
    if (typeof padding === 'string') {
      return padding + value;
    }
  }

  let value1 = padLeft('hello world', 4);
  console.log(value1);

  const value2 = padLeft('hello world', '3px');
  console.log(value2);
}