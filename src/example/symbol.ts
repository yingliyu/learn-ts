const s1 = Symbol()
// console.log(s1)
const s2 = Symbol()
// console.log(s2)

// console.log(s === s2)

// 加一个标识
const s3 = Symbol('lemon')
const s4 = Symbol('lemon')
// console.log(s3)
// console.log(s4)
// console.log(s4.toString()) //Symbol(lemon)
// console.log(Boolean(s4)) // true
// console.log(!s4) //隐式转换 false

// console.log(s3 === s4)

// Symbol不能参与计算。可以转换成字符串和布尔类型值


let prop = 'name'
const info = {
  name: 'lemon',
  [prop]: 'lemon',
  [`my${prop}`]: 'lemon'
}
console.log(info)

const s5 = Symbol('name')
const info2 = {
  [s5]: 'lemon',
  name: 'hello',
  age: 18,
  sex: 'man'
}
info2[s5] = 'world' // Symbol值作为属性名，不能使用点语法获取属性值
console.log(info2)

// 获取属性名的几种方法
for (const key in info2){
  console.log(key) // 返回值不包含Symbol作为属性名的属性
}

console.log(Object.keys(info2)) // 返回值不包含Symbol作为属性名的属性
 
console.log(Object.getOwnPropertyNames(info2)) // 返回值不包含Symbol作为属性名的属性

console.log(JSON.stringify(info2)) // 返回值不包含Symbol作为属性名的属性

console.log(Object.getOwnPropertySymbols(info2)) // 只返回Symbol作为属性名的属性

console.log(Reflect.ownKeys(info2)) // ES6的Reflect 返回全部属性！！！


// Symbol的两个静态方法
// Symbol.for()  Symbol.keyFor()
const s6 = Symbol('lemon')
const s7 = Symbol('lemon')
// console.log(s6===s7)// false

const s8 = Symbol.for('lemon')
const s9 = Symbol.for('lemon')
// console.log(s8 === s9) // true

console.log(Symbol.keyFor(s8))
console.log(Symbol.keyFor(s6))


// 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。
// 1.对象的Symbol.hasInstance属性，指向一个内部方法。
// 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
const obj1 = {
  [Symbol.hasInstance] (otherObj: any) {
    console.log(otherObj)
  }
}

console.log({a: 'a'} instanceof <any>obj1)


class Foo {
  [Symbol.hasInstance] (foo:number[]):any {
    return foo instanceof Array
  } 
}

// [1,2,3] instanceof new Foo()


//isConcatSpreasable

// let symArr:string[] = ['c', 'd'];
// console.log(['a', 'b'].concat(symArr, 'e')) // ['a', 'b', 'c', 'd', 'e']
// console.log(symArr[<any>Symbol.isConcatSpreadable]);// undefined

// let symArr2:string[] = ['c', 'd']
// symArr2[Symbol.isConcatSpreadable] = false
// console.log(['a', 'b'].concat(symArr2, 'e')) // ['a', 'b', 'c', 'd', 'e']

// class C extends Array {
//   constructor (...args){
//     super(...args)
//   }
//   getName() {
//     return 'lemon'
//   }
// }

// const c = new C(1,2,3)
// const a = c.map(item =>  item+1 )
// console.log(a)
// console.log(a instanceof C)
// console.log(a instanceof Array)


let obj3 = {
  [Symbol.match](string:any){
    console.log(string.length)
  }
}
'abcd'.match(<RegExp>obj3)

// Symbol.replace
// Symbol.search
// Symbol.split
// Symbol.iterator


let symobj:unknown = {
  [Symbol.toPrimitive] (type:any):void{
    // console.log(type);
  }
}
// const res = (symobj as number)++
// const res = `abc${symobj}`
// console.log(res);

// Symbol.toStringTag
let objm = {
  [Symbol.toStringTag]: 'lemon'
}
// console.log(objm.toString());


// Symbol
const objn = {
  a: 'a',
  b: 'b'
}

// with(obj6){

// }