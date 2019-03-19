// 模块声明通配符
// ## demo1: 可以通过前缀和后缀来表示非 JavaScript内容.
declare module '*!text' {
  const content: string;
  export default content;
}

declare module 'json!.' {
  const value: any;
  export default value;
}

// 现在你可以就导入匹配"*!text"或"json!*"的内容了。
// import fileContent from "./xyz.txt!text";
// import data from "json!http://example.com/data.json";
// console.log(data, fileContent);