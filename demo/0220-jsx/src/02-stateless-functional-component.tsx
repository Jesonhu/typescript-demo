// # 无状态函数组件
interface IFooProp {
  name: string;
  X: number;
  Y: number;
} 

declare function AnotherComponent(prop: {name: string}): any;
function ComponentFoo(prop: IFooProp) {
  return <AnotherComponent name={prop.name} />
}

// const Button = (prop: {value: string}, context: {color: string}) => <button>
