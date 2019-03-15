// # 函数参数双向协变
namespace functionParameterBivariance {
  // ## demo1
  enum EventType {Mouse, KeyBoard}

  interface IEvent {
    timestamp: number
  }
  interface IMouseEvent extends IEvent {
    x: number;
    y: number;
  }
  interface IKeyEvent extends IEvent {
    keyCode: number
  }
  interface IEventCallback {
    (n: IEvent): void
  }

  function listenEvent(eventType: EventType, handler: IEventCallback) {
    // do something
  }

  // 不健全，但是有用而且常见的.
  listenEvent(EventType.Mouse, (e: IMouseEvent) => {
    const x: number = e.x;
    const y: number = e.y;

    console.log(x + ',' + y);
  });

  listenEvent(EventType.Mouse, (e: IEvent) => {
    const x: number = (<IMouseEvent>e).x;
    const y: number = (<IMouseEvent>e).y;
    
    console.log(x + ',' + y);
  });

  // Error: 不匹配
  // listenEvent(EventType.Mouse, (e: number) => {
  //   console.log(e);
  // });
}