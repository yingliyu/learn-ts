// function adder(arg1: number, arg2:number): number{
//   return arg1 + arg2
// }

// const adder2 = (arg1: number, arg2:number) => arg1 + arg2

// 定义完整的函数类型
let adder: (x: number, y: number) => number

adder = (arg1: number,arg2: number): number => arg1 + arg2
let arg3 = 3
// adder = (arg1: string, arg2: string) => arg1 + arg2


// 使用接口定义函数类型(推荐使用类型别名定义函数类型)
// type Adder3 = (x:number ,y:number) => number

// let addFunc:Adder3
// addFunc = (arg1:number, arg2:number): number => arg1+arg2

// 参数 (参数arg3可选)
type AddFunction = (arg1:number, arg2:number, arg3?:number) => number
let addFunc: AddFunction
addFunc = (x:number, y:number, z:number) => x+y

// console.log(addFunc(1,2,3)) // 3

addFunc = (x:number, y:number, z:number) => x+y+z
// console.log(addFunc(1,2,3)) // 6


// 设置参数默认值
const addFunction = (x: number, y = 3 ): number => {
  return x + y || 0
}
console.log(addFunction(2))

// 剩余参数
const handleData0 = (arg1: number,...args: number[]) => {
  console.log(args)
}

// 函数重载:只能使用function定义
// 依据不同参数类型或参数个数执行一些不同函数体
function handleData (x: string): string[] // 函数重载
function handleData (x: number): number[] // 函数重载

function handleData (x:any): any {
  if(typeof x === 'string'){
    return x.split('')
  }else {
    return x.toString().split('').map((item) => Number(item))
  }
}

console.log(handleData('abc'))
console.log(handleData(123))
