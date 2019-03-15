// # 关于可靠性的注意事项
namespace aNoteOnSoundness {
  // ## demo1: 存在相同属性，并且类型一致就可以了
  interface Named {
    name: string;
  }

  let x: Named;
  let y = {name: '尼古拉斯赵四', location: '东北'};
  
  x = y;
  // 这里只检查 是否有 name 且 name 类型是否为 string

  // ## demo1.2: 检查函数参数也是这样
  function greet(n: Named) {
    console.log(`Hello, ${n.name}`);
  }
  greet(y);

  // ## demo2.1 比较两个函数
  let fn1 = (a: number): number => 0;
  let fn2 = (x: number, y: string): number => 1;

  fn2 = fn1;

  // Error: 参数不匹配
  // fn1 = fn2;

  // ## demo2.2 比较返回值
  let fn3 = () => ({name: '尼古拉斯赵四'});
  let fn4 = () => ({name: '尼古拉斯赵四', location: '东北'});

  fn3 = fn4;

  // Error: 返回不匹配
  // fn4 = fn3;

  // 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型
  

}