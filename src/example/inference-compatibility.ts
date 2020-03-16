// 类型推论和兼容性

// 通过值推断类型
// let name = 'lemon'
// name = 123 // error

// 多类型联合
let arr00 = [1, 'a']
// let arr00: (number|string)[] = [1, 'a'] // 类型推断为联合类型
// arr00 = [2, 'c', false] // error

// 上下文类型
window.onmousedown =  (event) => {
  console.log(event)
  console.log(event.a) // error 类型mouseEvent上不存在属性a
}

// 深层次 递归检测
interface InfoInterface {
  name: string
  info: {
    age: number
  }
}

let  infos: InfoInterface

const infos1 = {name: 'lemon', info: {age: 18}}
const infos2 = {age: 18}
const infos3 = {age: 18 , name: 'lemon'}

infos = infos1
// infos = infos2 // error: Property 'name' is missing in type '{ age: number; }'
// infos = infos3 // error

// 函数
// 参数个数
let x = (a: number) => 0
let y = (b: number, c: number) => 0

y = x
// x = y
// 等号右侧赋值函数的参数个数必须小于等于等号左侧被赋值函数的参数个数

const arrs = [1, 2, 3]
arrs.forEach((item, index, array) => {
  console.log(item)
})

arrs.forEach((item) => {
  console.log(item)
})

// 参数类型
let x1 = (a: number) => 0
let y1 = (b: string) => 0
// x = y

// 可选参数和剩余参数
let getSum = (arr:number[], callback:(...args:number[]) => number): number => {
  return callback(...arr)
}
const res = getSum([1,2],(...args: number[]): number => args.reduce((a,b) => a+b, 0))
console.log(res);
