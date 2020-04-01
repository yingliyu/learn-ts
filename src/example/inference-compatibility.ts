// 类型推论和兼容性

// 通过值推断类型
// let name = 'lemon'
// name = 123 // error

// 多类型联合
let arr00 = [1, 'a']
// let arr00: (number|string)[] = [1, 'a'] // 类型推断为联合类型
// arr00 = [2, 'c', false] // error

// 上下文类型
// window.onmousedown =  (event) => {
  // console.log(event)
  // console.log(event.a) // error 类型mouseEvent上不存在属性a
// }

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
  // console.log(item)
})

arrs.forEach((item) => {
  // console.log(item)
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
// console.log(res);

// 函数参数双向协变
let funcA =  (arg: number | string): void => {}
let funcB = (arg: number): void => {}
funcA = funcB
funcB = funcA


// 返回值类型
let x11 = (): string | number => 0
let y11 = (): string => 'a'
let z11 = (): boolean => false
// x11 = y11
// y11 = x11 // error
// y11 = z11 // error

// 函数重载
// function merge (arg1: number, arg2 : number): number
// function merge (arg1: string, arg2 : string): string
// function merge (arg1: any, arg2 : any){
//   return arg1 + arg2
// }
// function sum (arg1:number, arg2: number): number
// function sum (arg1:any, arg2: any): any{
//   return arg1 + arg2
// }

// let func = merge
// func = sum // error 类型不兼容

// enum StatusEnum {
//   On,
//   Off
// }

// enum AnimalEnum {
//   Dog,
//   Cat
// }
// let s = StatusEnum.On
// s = 2 // 数值类型 兼容

// s = AnimalEnum.Dog // 数字枚举类型只与数字类型兼容，在不同的枚举之间是不兼容的

// 类的兼容性 只比较类的实例成员，类的静态成员和构造函数不比较
// class AnimalClass {
//   public static age: number
//   constructor(public name: string){}
// }
// class PeopleClass {
//   public static age: string
//   constructor(public name: string){}
// }
// class FoodIsClass {
//   constructor(public name: number){}
// }

// let anima: AnimalClass
// let people: PeopleClass
// let food :FoodIsClass

// anima = people
// anima = food // error

// class ParentClass {
//   private age: number
//   constructor(){}
// }
// class SonClass extends ParentClass{
//   protected name: string
//   constructor(){
//     super()
//   }
// }
// class OtherClass{
//   protected age: string
//   constructor(){}
// }
// let children: ParentClass = new SonClass()
// const other:ParentClass = new OtherClass() // error


// 泛型的兼容性
// interface Data<T>{
//   data: T
// }
// let data1: Data<number>
// let data2: Data<string>

// data1 = data2