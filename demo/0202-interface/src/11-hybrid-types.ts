// # 混合类型
namespace hybridTypes {
  // ## demo1
  interface ICounter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): ICounter {
    const counter = <ICounter>function(start: number) {};
    counter.interval = 12;
    counter.reset = () => {};
    return counter;
  }

  const c = getCounter();
  c(10);
  c.reset();
  c.interval = 5;
}