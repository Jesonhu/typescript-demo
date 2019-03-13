// ====================
// 获取指定目录下面的子文件夹
// 
// @update 2019/03/13
// ====================
const path = require('path')
const fs = require('fs')

const getSonDirectory = (path) => {
  // @see http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options
  const files = fs.readdirSync(path)
  const resArr = []
  const basicUrl = BASE_URL
  let resStr = ''
  let itemStr = ''
  
  files.forEach(name => {
    resStr += `+ [${name}](${basicUrl}/${name}) \n`
  })

  console.log(resStr)
  return resStr
}

const PATH = './demo'
const BASE_URL = 'https://github.com/Jesonhu/typescript-demo'
getSonDirectory(PATH)
