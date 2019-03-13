// 使用函数声明不需要写函数构造体.
declare function objCreate(o: object | null): void;

// Ok
objCreate({name: '张三'});
// Ok
objCreate(null);

// Error
// objCreate(1);

// Error
// objCreate('string')

// Error
// objCreate(false);

// Ok v3.3.33
objCreate(undefined);


