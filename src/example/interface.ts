// const getFullName = ({firstName,laseName}) => {
//   return `${firstName} ${laseName}`
// }

// const fullname = getFullName({
//   firstName: 'lemon',
//   laseName: 'yu'
// })

// console.log(fullname)


interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({firstName, lastName}:NameInfo):string =>{
  return `${firstName} ${lastName}`
}
const fullname = getFullName({
    firstName: 'lemon',
    lastName: 'yu'
  })
interface Vegetable{
  color?: string, // 可选属性
  readonly type: string
  [prop:string]: any
}

const getVegetable = ({color, type}) => {
  return `A ${color? (color + ' '): ''} ${type} `
}


// 1.使用类型断言跳过多余属性的检查
// console.log(getVegetable({
//     type: 'tomato',
//     color:'red',
//     size: 2
//   } as Vegetable))

// 2.利用索引签名
// 3.利用类型兼容性
const vegetableInfo = {
      type: 'tomato',
      color:'red',
      size: 2
    }
console.log(getVegetable(vegetableInfo))


// 设置接口属性为只读readonly
interface UserInfo {
  name: 'hello',
  readonly age:18
}

let vegetableObj: Vegetable = {
  type: 'tomato'
}
// vegetableObj.type = 'carrot' // type只读不能修改


interface Arr {
  0: number,
  readonly 1: string
}

let arr: Arr = [1, '2']
// arr[1] = 'a'

// 接口除了可以定义为对象的结构，还定义为函数的结构
type AddFunc = (num1: number, num2: number) =>number // 类型别名

const add:AddFunc = (n1, n2) => n1+n2

// 索引类型
// interface RoleDic {
//   [id: number]: string
// }

// const role1: RoleDic = {
//   1:'abc'
// }

interface RoleDic {
  [id: string]: string
}

const role1: RoleDic = {
  1:'abc',
  a: 'admin'
}

// const obj7 = {
//   123: 'lemon',
//   '123': 'lemon2'
// }

// 接口的继承
interface Vegetables {
  color: string

}

interface Tomato{
  color: string,
  radius: number
}

interface Tomato extends Vegetables{
  color: string,
  radius: number
}

const tomato: Tomato ={
  radius: 10,
  color: 'red'
}

// 混合类型接口
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = ():void => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
