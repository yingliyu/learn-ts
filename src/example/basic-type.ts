
// 1. 布尔值类型
let bool1: boolean = false
let bool2: boolean = false
bool2 = true

// 2. 数值类型
// ts中支持二进制 八进制 十进制 十六进制四种类型
let num: number = 123
num = 0b111011
num = 0x7b

// 3. 字符串类型
let str:string
str = 'abc'
str = `数值是：${num}` // 模版字符串
console.log(str);


// 4. 数组类型
// [1,2,3]
// 写法1:可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
let arr1: number[]
arr1 = [5]
// 写法2:使用数组泛型，Array<元素类型>
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1,2,'a']

// 5. 元组类型
let tuple: [string,number]
tuple = ['a', 1]
// console.log(tuple[3].toString()); // 当访问一个越界的元素，会使用联合类型替代


// 6. 枚举类型
enum Roles1 {
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles1)
console.log(Roles1.USER) // 2
enum Roles2 {
  SUPER_ADMIN,
  ADMIN = 8,
  USER
}
console.log(Roles2[8])
// var obj ={}
// console.log(obj['name']=8) // 8



// 7. 任意值类型any
// 尽量不用
let value: any
value = 'abc'
value = 123
value = false 
const arr4:any[] = [1, 'a']


// 8. 空值类型void
const consoleText = (text:string):void => {
  console.log(text)
}
consoleText('lemon') // lemon
let v: void
v = undefined
// v = null // 报错：严格检查

// 9. null和undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 'a'



// 10. never类型
// 抛错或者死循环的返回值是never
const errorFunc = (message: string): never => {
  throw new Error(message)
}
// const infiniteFunc = ():never => {
//   while(true){}
// }
// let neverVariable = (()=> {
//   while(true){}
// })()
// neverVariable = 123 // error 数值类型不能赋值给never类型
// num = neverVariable // never类型可以赋值给数值类型



// 11. object
let obj = {
  name:'lemon'
}
let obj2 = obj
obj2.name = 'xxx'
console.log(obj);

function getObject(obj:object):void {
  console.log(obj);
}
getObject(obj2)




// 12. 类型断言
// tsx只能使用as语法
const getLength = (target: string | number): number => {
  if((<string>target).length || (target as string).length === 0){
    return (<string>target).length
  } else {
    return target.toString().length
  }
}

console.log(getLength(123))
console.log(getLength('a'))