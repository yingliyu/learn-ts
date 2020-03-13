// 泛型
// 类型变量（T或者其他字符表示，一般是一个大写字母）
// 类型变量：一种特殊的变量，只用于表示类型而不是值。
const getArray = <T>(val: T, times: number = 5):T[]  => {
  return new Array(times).fill(val)
}
console.log(getArray<number>(2,3))
console.log(getArray<string>('2',3).map(item => item.length))

const getarr = <T, U>(p1: T, p2:U, times:number):[T, U][] => {
  return new Array(times).fill([p1, p2])
}

console.log(getarr(1,'a',3))
getarr<number, string>(1,'a',3).forEach(item => {
  console.log(item[0])
  console.log(item[1])
})

// 泛型在类型定义中的使用：根据泛型定义函数类型

let getArr2: <T>(arg:T, times:number) => T[]
getArr2 = (arg: any,times: number) => {
  return new Array(times).fill(arg)
}
console.log(getArr2('123', 3).map(item => item.length))

// 使用类型别名定义泛型函数类型
type GetArr3 = <T> (val:T, times:number) => T[]
let getArr3:GetArr3 = (val: any,times: number) => {
  return new Array(times).fill(val)
}

// 使用接口定义泛型函数类型
// interface GetArr4<T> {
//   (arg: T, times:number): T[],
//   <U>(arg: U, times:number): U[],
//   array: T[]
// }



// 泛型约束
// 定义一个拥有length属性的数据的接口
interface ValLength {
  length:number
}
const getArray1 = <T extends ValLength>(arg:T, times:number):T[] => {
  return new Array(times).fill(arg)
}

getArray1('123', 3)
getArray1([1,2], 3)
getArray1({
  length: 2
}, 3)


const getProps = <T, K extends keyof T>(obj: T, proname: K) => {
  return obj[proname]
}

const objs = {
  a: 'a',
  b: 'b'
}
getProps(objs, 'a')
// getProps(objs, 'c')