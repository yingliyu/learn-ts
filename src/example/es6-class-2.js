/*ES6类的进阶
ES5和ES6的继承
Object.getPrototypeOf
super作为函数/对象
类的prototype属性和__proto__属性
*/
// ES5继承
function Food(){
  this.type = 'food'
}
Food.prototype.getType = function () {
  return this.type
}

function Vegetables (name){
  this.name = name
}
Vegetables.prototype = new Food()

const tomato = new Vegetables('tomato')
// console.log(tomato.getType())

// ES6 类的继承
// class Parent {
//   constructor(name){
//     this.name = name
//   }
//   getName () {
//     return this.name
//   }
//   static _getName() {
//     return this.name
//   }
// }

// class Son extends Parent {
//   constructor(name, age) {
//     super(name) // 调用之后使用this
//     this.age = age
//   }
// }

// const son = new Son('lemon', 18)
// console.log(son)
// console.log(son.getName())
// console.log(son instanceof Son)
// console.log(son instanceof Parent)
// console.log(Son._getName()) // Son

// console.log(Object.getPrototypeOf(Son) === Parent) // true

// super作为函数使用 代表父类的构造函数ES6要求子类继承父类是在子类的构造函数中必须调用一次super()

// super作为对象使用 在普通方法中指向父类的原型对象 在静态方法中指向的是父类
// class Parent {
//   constructor(){
//     this.type = 'parent'
//   }
//   getName () {
//     return this.type
//   }
// }
// Parent.getType = () => {
//   return 'is parent'
// }
// Parent.prototype.getType1 = function () {
//   return 'proto type'
// }

// class Child extends Parent {
//   constructor() {
//     super()
//     console.log('constructor:' + super.getName())
//   }
//   getParentName () {
//     console.log('getParentName: '+ super.getName()) // super指向父类的原型对象
//   }
//   static getParentType () {
//     console.log('getParentType: '+ super.getType()) // super指向的是父类
//   }
// }
// const child = new Child() // constructor:parent
// console.log(child)
// child.getParentName() // parent
// Child.getParentType() // getParentType:is parent


class Parent {
  constructor() {
    this.name = 'parent'
  }
  print() {
    console.log(this.name)
  }
}


class Child extends Parent {
  constructor() {
    super()
    this.name = 'child'
  }
  childPrint () {
    super.print()
    // console.log(super)
    
  }
}
const c = new Child()
// c.childPrint() // child


// prototype
// __proto__
// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__
var objs = new Object()
// console.log(objs.__proto__ === Object.prototype)

// 原生构造函数的继承 Boolean Number String  Array Date Function RegExp Error Object
class CustomArray extends Array{
  constructor(...args) {
    super(...args)
  }
}
const arr = new CustomArray(3)
arr.fill('+') 
console.log(arr) // ['+', '+', '+']
const arr2 = new CustomArray(3, 4, 5)
console.log(arr2.join('_')) // 3_4_5
