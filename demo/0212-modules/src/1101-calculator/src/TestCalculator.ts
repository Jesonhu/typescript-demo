import { Calculator, test } from "./Calculator";


let c = new Calculator();
test(c, "1+2*33/11="); // prints 9
// Tips: 这个计算器是从左往右依次进行计算的。没有常规的优先级功能.