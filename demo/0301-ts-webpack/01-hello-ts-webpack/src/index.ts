import * as _ from 'lodash';
import * as $ from 'jquery';

interface IHellojQuery {
  (el: JQuery<HTMLElement>, msg: string): void;
}
interface IHello {
  (el: HTMLElement, msg: string): void;
}

const hello: IHellojQuery = (el, msg) => {
  if (el) {
    el.html(msg);
  }
}
const oApp = document.querySelector('#app') as HTMLElement;
const $app = $('#app');
const msgArr: string[] = ['Hello TS', 'Webpack', 'jQuery', 'Loadash', ':)'];
const msgStr: string = _.join(msgArr, ' & ');
hello($app, msgStr);