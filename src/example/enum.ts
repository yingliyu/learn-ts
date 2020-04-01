// 1-数字枚举
const temp = 3
const getIndex = () => {
  return 7
}
enum Status {
  Uploading = 1,
  Success = temp,
  Failed = 6
}
// 如果某项使用了常量或者函数返回值，后面其他项必须都要设置初始值。
console.log(Status.Uploading) // 1
console.log(Status.Success) // 3
console.log(Status.Failed) // 6
// console.log(Status['Uploading'])

// console.log(Status)

// 2-字符串枚举 ts2.4新增
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或同一个枚举值里的其他字符串枚举成员进行初始化。
// 字符串枚举不能使用常量或者计算值的。所以也不能使用其他枚举值里的枚举成员。
enum Message {
  Error = 'Sorry ,error',
  Success = 'Hoho ,success',
  Failed = Error
}
console.log(Message.Failed) // Sorry ,error


// 3-异构枚举 （不建议使用）
// 混合字符串和数字成员
enum Result {
  Failed = 0,
  Success = 'success'
}


// 4 - 联合枚举与枚举成员的类型
/*
1.不带初始值的枚举成员 enum E { A }
2.值为字符串字面量 enum E { A = 'a' }
3.值为数值字面量 enum E { A = -1 }
（枚举值里的所有成员的值）满足以上条件之一，这个枚举值或成员就可以作为类型使用。

*/
// 枚举成员类型
// enum Animals {
//   Dog = 1,
//   Cat = 2
// }

// interface Dog {
//   type: Animals.Dog
// }

// const dog: Dog = {
//   // type: Animals.Cat, // Error 类型不符合
//   type: Animals.Dog
// }

// 联合枚举
// enum Status{
//   Off,
//   On
// }

// interface Light {
//   status: Status
// }

// const light:Light = {
//   status: Status.On
// }

// const枚举
// 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。
// const enum Animals {
//   Dog = 1
// }

// const animal = Animals.Dog
// 编译后：
//  var animal = 1 /*Dog*/