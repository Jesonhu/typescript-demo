# TypeScript & Webpack runtime in broswer

## 功能
+ `TS` 编译为 `JS` 并且在浏览器中正常运行.
+ webpack: `html-webpack-plugin` 生成新的 index.html
+ webpack: `clean-webpack-plugin` 编译时删除 `dist` 目录工具
+ webpack: `webpack-dev-server` 热更新服务器
+ webpack: 功能代码与 `库` [代码分割](https://webpack.js.org/plugins/split-chunks-plugin/).
+ webpack: 打包后代码分析 `webpack-bundle-analyzer`
+ webpack: 生产环境中压缩js `uglifyjs-webpack-plugin`