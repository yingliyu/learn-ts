// 1、交叉类型 用符号：&
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U
  res = Object.assign(arg1, arg2)
  return res
}
//  const mergerd = mergeFunc({a: 'a'}, {b: 'b'})
//  console.log(mergerd)


// 2、联合类型 type1 | type2 | type3
// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
const getLengthFunc = (content): number => {
  if(typeof content === 'string'){
    return content.length
  }else {
    return content.toString().length
  }
}
// console.log(getLengthFunc('1234'))
// console.log(getLengthFunc(1234))

const valueList = [123, 'abc']
const getRandomFunc = () => {
  const num = Math.random() *10
  if(num<5){
    return valueList[0]
  }else{
    return valueList[1]
  }
}

const item = getRandomFunc()
// console.log(item)

// 类型保护
// function isString(val: number | string): val is string{
//   return typeof val === 'string' // boolean
// }

// if((item as string).length){
//   console.log((item as string).length)
// }else {
//   console.log((item as number).toFixed())
// }

// 类型保护typeof的两个条件：必须使用===或者!==  必须是string/number/boolean/symbol中的一种
// if(typeof item === 'string'){
//   console.log(item.length);
// }else{
//   console.log(item.toFixed());
// }

// instanceof 类型保护
class CreateByClass1 {
  public age = 18
  constructor(){}
}
class CreateByClass2 {
  public name = 'lemon'
  constructor(){}
}

function getRandom(){
  return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2()
}

// const item1 = getRandom()
// if(item1 instanceof CreateByClass1){
//   console.log(item1.age);
// }else{
//   console.log(item1.name);
// }

// null和undefined 是任何类型的子类型
let abc = 'abc' // 默认 abc:string | undefined
// abc = undefined

const sumFunc = (x: number, y?: number) => {
  return x + (y || 0)
}

// 类型保护 和 类型断言
const getLengthFun = (val: string | null): number => {
  return (val || '').length
}

function getSplicedStr (num: number | null): string {
  function getRes(prefix: string){
    return prefix + num!.toFixed().toString() // 高度注意：类型断言手动去除null和undefined 后面加!形如：parameterName! 表示不会为null和undefined
  }
  num = num || 0.1
  return getRes('lemon-')
}
// console.log(getSplicedStr(3.23))


// 类型别名
// 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
type TypeString = string
let str11: TypeString
// 类型别名也可以使用泛型
type PositionType<T> = {x:T, y:T}
const position1: PositionType<number> = {
  x:1,
  y:0
}
const position2: PositionType<string> = {
  x:'1',
  y:'0'
}

type Childs<T> = {
  current: T,
  child?: Childs<T>
}

let ccc: Childs<string> = {
  current: 'T1',
  child: {
    current: 'T2',
    child:{
      current: 'T3',
    }
  }
}
// 综上注意: 只可以在对象属性中引用类型别名自己

type Alis = {
  num : number
}
interface Alis2{
  num: number
}

let _alis:Alis = {
  num: 2
}
let _alis2:Alis2 = {
  num: 2
}

_alis = _alis2 // 类型兼容


//  字面量类型 字符串字面量 和 数字字面量
// type Name = 'lemon'
// const name1: Name = 'lemon'
// 联合类型
// type Deirection = 'north' | 'east' | 'south' | 'west'
// function getDirectionFirstLetter(dir: Deirection){
//   return dir.substr(0, 1)
// }
// console.log(getDirectionFirstLetter('north'))


// 数字字面量
// type Age = 18
// interface InfoInterfaces {
//   age: Age,
//   name: string
// }

// const _infos: InfoInterfaces = {
//   name: 'lemon',
//   age: 18
// }



// 函数的兼容性
// let funca = (a: number) => 0
// let funcb = (b: number, c: string) => 0

// funcb = funca
// funca = funcb

// 函数参数双向协变
// let funca = (a: number | string):void => {}
// let funcb = (a: number):void => {}
// funca = funcb
// funcb = funca


// 返回值类型
let xfun = (): string | number => 0
let yfun = (): string => 'a'
let zfun = ():boolean => true
// xfun = yfun
// yfun = xfun // error
// yfun = zfun // error

// 函数重载
// function merge1 (arg1: number,arg2: number): number
// function merge1 (arg1: string,arg2: string): string
// function merge1 (arg1: any, arg2: any){
//     return arg1 + arg2
// }
// console.log(merge1('1', '2').length)
// console.log(merge1(1, 2).length) // error
// function sum1(arg1: number, arg2:number): number
// function sum1(arg1: any, arg2: any): any{
//   return arg1 + arg2
// }
// let func1 = merge1
// func1 = sum1 // error


// 枚举
// enum StatusEnum {
//   On,
//   Off
// }
// enum AnimalEnum{
//   Dog,
//   Bird
// }
// let s = StatusEnum.On
// s = AnimalEnum.Dog // error

// class AnimalClass {
//   public static age: number
//   public color: string
//   constructor(public name: string){}
// }

// class PeopleClass {
//   public static age: string
//   constructor(public name: string){}
// }

// class FoodClass {
//   constructor(public name: number){}
// }
// let isAnimal: AnimalClass
// let _people: PeopleClass
// let isFood: FoodClass
// 当使用一个类作为类型来指定一个变量，检测的是实例，不会检测类的静态成员和构造函数
// isAnimal = _people // ?
// isAnimal = isFood // error

