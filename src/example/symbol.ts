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

// 遍历
for (const key in info2){
  console.log(key) // 返回值不包含Symbol属性
}

console.log(Object.keys(info2)) // 返回值不包含Symbol属性
 
console.log(Object.getOwnPropertyNames(info2)) // 返回值不包含Symbol属性

console.log(JSON.stringify(info2)) // 返回值不包含Symbol属性

console.log(Object.getOwnPropertySymbols(info2)) // 只返回Symbol属性

console.log(Reflect.ownKeys(info2)) // ES6的Reflect 返回全部属性
