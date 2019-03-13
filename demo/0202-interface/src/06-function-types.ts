// # 函数型接口

// ## Demo1
interface ISearchFunc {
  (source: string, subString: string): boolean
}

const mySearch: ISearchFunc = (source: string, subString: string) => {
  const result = source.search(subString);
  
  return result > -1;
}

// ## Demo2
interface IFindFunc {
  (isFind: boolean): boolean
}

const myFind: IFindFunc = (isFindMark: boolean) => isFindMark;

const isFind: boolean = true;
const isFindResult = myFind(isFind);
console.log('是否发现了: ', isFindResult);


// ## Demo3 函数定义的时候不指定类型，让其通过 `函数接口` 推断出来.
interface IMan {
  isCanCreate: boolean
  isCanWork: boolean

  [propName: string]: any
}
interface IIsMen {
  (obj: object): boolean
}

/**
 * 判断是否是人类.
 * 
 * @param {object} 接收一个对象.
 * @desc 判断依据：人类会制造使用工具从事生产劳动. 
 */
// 方式1, 是可以的.
// 这种提示好些. 但是参数为一个 {} 会报错
// const isMan = ({isCanCreate, isCanWork} = {isCanCreate: false, isCanWork: false}) => {
//   let result: boolean = false;

//   if (isCanCreate && isCanWork) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return result;
// }

// 方式2
const isMan: IIsMen = ({isCanCreate, isCanWork}: IMan) => {
  let result: boolean = false;

  if (isCanCreate && isCanWork) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

const manParam1 = {isCanCreate: false, isCanWork: false, isCanTalk: '汪汪'};
const isMan1 = isMan(manParam1);
console.log('是否是人类：', isMan1);

const manParam2 = {isCanCreate: true, isCanWork: true};
const isMan2 = isMan(manParam2);
console.log('是否是人类：', isMan2);

// 方式1 写法，传递一个 {} 会报错；方法2 不会
const manParam3 = {};
const isMan3 = isMan(manParam3);
console.log('是否是人类：', isMan3);

