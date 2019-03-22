import * as _ from 'lodash';

interface IHello {
  (el: HTMLElement, msg: string): void;
}

const hello: IHello = (el, msg) => {
  if (el) {
    el.innerText = msg;
  }
}
const oApp = document.querySelector('#app') as HTMLElement;
const msgArr: string[] = ['Hello TS', 'Webpack', 'Loadash!!!'];
const msgStr: string = _.join(msgArr, ' & ');
hello(oApp, msgStr);