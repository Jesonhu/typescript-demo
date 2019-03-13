// # 可选属性
interface IRectangle {
  width?: number
  height?: number
  color: string
}



function createRectangle(config: IRectangle): {color: string; width: number} {
  const newRectangle = {color: "white", width: 100};

  return newRectangle;
}

// 或者 函数返回类型也采取接口方式
function createRectangle2(config: IRectangle): IRectangle {
  const newRectangle = {color: "white", width: 100};

  return newRectangle;
}