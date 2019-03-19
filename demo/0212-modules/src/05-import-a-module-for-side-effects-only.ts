// # 具有副作用的导入模块
namespace importAModuleForSideEffectsOnly {
  // 尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用。 
  // 这些模块可能没有任何的导出或用户根本就不关注它的导出。 使用下面的方法来导入这类模块：
  // import './aaa.js'
}