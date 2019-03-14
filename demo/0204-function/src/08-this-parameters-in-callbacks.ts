// # this参数在回调函数里
namespace thisParametersInCallback {
  // ## demo1: 
  interface IUIElement {
    // Error: Parameter has a name but no type. Did you mean 'arg0: this'?ts(7051)
    // addClickListener(onclick: (this, e: Event) => void): void;
    
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }

  // class Handler {
  //   info: string
  //   onClickBad(this: Handler, e: Event) {
  //     this.info = e.message;
  //   }
  // }

  // let h = new Handler();
  
}