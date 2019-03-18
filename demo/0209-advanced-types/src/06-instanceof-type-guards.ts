// intanceof 类型保护
namespace instanceofTypeGuards {
  // ## demo1: intanceof 类型保护是通过构造函数来细化类型的一种方式.
  interface IPadder {
    getPaddingString(): string
  }

  class SpaceRepeatingPadder implements IPadder {
    constructor(private numSpaces: number) {}
    getPaddingString(): string {
      const arrLen: number = this.numSpaces + 1;
      return Array(arrLen).join(' ');
    }
    spaceRepeatingPadderMark: string
  }

  class StringPadder implements IPadder {
    constructor(private value: string) {}
    getPaddingString(): string {
      return this.value;
    }
    stringPadderMark: string
  }

  function getRandomPadder() {
    return Math.random() < 0.5 ?
      new SpaceRepeatingPadder(4) :
      new StringPadder('  ');
  }

  // 类型为 SpaceRepeatingPadder | StringPadder
  const padder: IPadder = getRandomPadder();

  if (padder instanceof SpaceRepeatingPadder) {
    // 细化为
    padder.spaceRepeatingPadderMark

    // Error: 
    // padder.stringPadderMark
  }

  if (padder instanceof StringPadder) {
    // 细化
    padder.stringPadderMark

    // Error:
    // padder.spaceRepeatingPadderMark
  }

}