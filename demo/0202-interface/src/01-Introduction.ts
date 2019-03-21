// # 基本使用

interface IStudent {
  name: string
  age: number
}

// 接口可以重复定义
interface IStudent {
  class: string
}

// Error: 存在的接口更改类型，这里会报错
// 后续属性声明必须属于同一类型。属性“name”的类型必须为“string”，但此处却为类型“number”。ts(2717)
// interface IStudent {
//   name: number
// }

function showStudent(student: IStudent): void {
  console.log('name', student.name);
  console.log('age', student.age);
}

const studentParam1 = {name: '张三', age: 13, class: '初一'}
const student1 = showStudent(studentParam1);