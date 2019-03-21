import { Observable } from "./observable";
import "./map";
let ooo: Observable<number>;
// Error: 在赋值前使用了变量“ooo”
// ooo.map(x => x.toFixed());