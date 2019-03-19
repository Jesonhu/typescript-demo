// # 别名
namespace Aliases {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Aliases.Polygons;
const sq = new polygons.Square();
