/*ES6 类基础篇：
ES5和ES6创建实例
constructor方法
类的实例
取值函数和存值函数
class表达式
静态方法
实例属性和其他方法
实现私有方法
*/

// ES5方法创建类
// function Point(x, y){
//   this.x = x
//   this.y = y
// }
// Point.prototype.getPosition = function(){
//   return `(${this.x},${this.y})`
// }


// ES6方法创建类
// class Point {
//   constructor (x, y){
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `(${this.x},${this.y})`
//   }
// }
// var p1 = new Point(1,2)
// console.log(p1)
// console.log(p1.getPosition()) // (1,2)
// console.log(p1.hasOwnProperty('x')) // true
// console.log(p1.hasOwnProperty('getPosition')) // false
// console.log(p1.__proto__.hasOwnProperty('getPosition')) // true

// 取值函数和存值函数
// var info = {
//   _age: 18,
//   set age (newVal) {
//     console.log(newVal>18? '成年了' : '小学生无所畏惧')
//   },
//   get age () {
//     console.log('年龄是个秘密...')
//     return this._age
//   }
// }
// console.log(info._age) // 18
// console.log(info.age) // 年龄是个秘密... 18
// info.age = 17


// get和set关键字在ES6类中的使用
// class Info {
//   constructor (age) {
//     this._age = age
//   }
//   set age (newAge) {
//     this._age = newAge
//     console.log('new age is: '+ this._age)
    
//   }
//   get age () {
//     return this._age
//   }
// }

// const info = new Info(18)
// console.log(info.age) // 调用取值函数：18
// info.age = 20 // 调用s存值函数
// console.log(info.age) // new age is: 20   20

// class表达式
// const func = function () {
//   // doing
// }
// function func () {}

// class Infos{
//   constructor() {}
// }

// const Infos = class {
//   constructor () {}
// }
// const testInfo = new Infos()


// 静态方法static 类的静态方法类的实例是继承不了的
// class Point {
//   z = 0
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `(${this.x}, ${this.y})`
//   }
//   static getClassName() {
//     return Point.name
//   }
// }
// Point.c = 3
// const point = new Point(1, 2)
// console.log(p.y) // 实现静态属性
// console.log(point.getPosition())
// console.log(point.getClassName())
// console.log(Point.getClassName())


// 通过命名区分公有方法和私有方法
// class Point {
//   func1(){}
//   _fun2(){}
// }

// 将私有方法移出模块
// const _fun2 = () =>{console.log('f2')}
// class Point {
//   func1(){
//     _fun2.call(this)
//   }
// }

// const p = new Point()
// p.func1()
// p._fun2()

// new.target 返回new命令作用的构造函数
// class Point {
//   constructor() {
//     console.log(new.target)
//   }
// }

// const p = new Point()

// 子类继承父类的场景中，在父类中使用输出new.target得到的的是子类的constructor
// class Parent {
//   constructor(params) {
//     console.log(new.target)
//   }
// }

// class Son extends Parent {
//   constructor(params) {
//     super()
//   }
// }
// const son = new Son()