// # 上下文类型
namespace contextualType {
  // ## “按上下文归类”
  window.onmousedown = function(e) {
    // Error: Type 'Event' is missing the following properties from type 'MouseEvent': altKey, button, buttons, clientX, and 25 more.ts(2740)
    // e = e || window.event
    console.log(e.button);
  }
}