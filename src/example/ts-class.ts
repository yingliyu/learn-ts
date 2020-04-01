class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet () {
    return `hello, ${this.greeting}`
  }
}
const g = new Greeter('world')
// console.log(g.greet())

 // 继承
// super作为函数使用 代表父类的构造函数ES6要求子类继承父类是在子类的构造函数中必须调用一次super()
// super作为对象使用 在公有方法中指向父类的原型对象 在静态方法中指向的是父类
// 例子1
// 基类/超类
// class Animals {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   move(distance: number = 0){
//     console.log(`animal moved ${distance}m.`)
//   }
// }
// 派生类/子类
// class Dog extends Animals{
//   constructor(name: string) {
//     super(name) // 父类的构造函数
//   }
//   move(distance = 5){
//     // super.move(distance) // 指向父类的原型对象:animal moved 9m.
//     console.log('dog', distance)
//   }
//   bark() {
//     console.log('woof')
//   }
// }
// const dog = new Dog('Timm')
// dog.bark() // woof
// dog.move(9) // dog 9

// 例子2：

// class Animal {
//   name: string
//   constructor(theName: string) { this.name = theName }
//   move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`)
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) { super(name) }
//   move(distanceInMeters = 5) {
//       console.log("Slithering...")
//       super.move(distanceInMeters)
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) { super(name) }
//   move(distanceInMeters = 45) {
//       console.log("Galloping...")
//       super.move(distanceInMeters)
//   }
// }

// let sam = new Snake("Sammy the Python")
// let tom: Animal = new Horse("Tommy the Palomino")

// sam.move() // Slithering... & Sammy the Python moved 5m.
// tom.move(34) // Galloping... & Tommy the Palomino moved 34m.
/*
派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
*/


// 公共，私有与受保护的修饰符
// public: 可以自由的访问程序里定义的成员,在TypeScript里，成员都默认为 public。
// private: 当成员被标记成 private时，它就不能在声明它的类的外部访问。
// protected: protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。


// 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。


// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
// class Person {
//   protected name: string
//   protected constructor(theName: string) { this.name = theName }
// }

// // Employee 能够继承 Person
// class Employee extends Person {
//   private department: string

//   constructor(name: string, department: string) {
//       super(name)
//       this.department = department
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`
//   }
// }

// let howard = new Employee("Howard", "Sales")
// let john = new Person("John") // 错误: 'Person' 的构造函数是被保护的不能在包含它的类外被实例化

// readonly修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

class Birds {
  readonly name: string
  readonly color: string = 'black'
  constructor(name: string) {
    this.name = name
  }
}
const b = new Birds('lalala')
// b.name = 'hahaha' // 错误! name 是只读的不能被重新赋值

// 参数属性
// class A{
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//   }

  // class C{
  //   // readonly age:number = 18
  //   constructor(public name: string){}
  // }

  // class F{
  //   constructor(name: string) {}
  // }
  // const a  = new A('lemon')
  // const c  = new C('lemon')
  // const f  = new F('lemon')
  // console.log(a) //  {name: lemon}
  // console.log(c) //  {name: lemon}
  // console.log(f) //  {}


// 静态属性
// class Person{
//   public static age: number = 18
//   public static getAge() {
//     return Person.age
//   }
//   constructor() {}
// }
// const person = new Person()
// console.log(Person.age)
// console.log(person.age)
// console.log(Person.getAge()) // 18
// console.log(person.getAge())

// 可选的类属性
class Info {
  public name: string
  public age?:number
  private _infoStr: string
  constructor(name: string, age?: number, public sex?: string){
    this.name = name
    this.age = age
  }
  get infoStr(){
    return this._infoStr
  }
  set infoStr(val){
    console.log(`setter: ${val}`)
    this._infoStr = val
  }
}
// const info1 = new Info('lemon')
// const info3 = new Info('lemon', 18)
// const info5 = new Info('lemon', 18, 'women')
// console.log(info1) // {sex: undefined,name:"lemon",age:undefined}
// console.log(info3) // {sex: undefined,name:"lemon",age:18}
// console.log(info5) // {sex: "women",name:"lemon",age:18}

// 存取器
const myinfo = new Info('lemon', 18)
// myinfo.infoStr = 'lemon 18' // setter: lemon 18
// console.log(myinfo.infoStr) // lemon 18



// 抽象类
// abstract class People{
//   constructor(public name: string) {}
//   public abstract printName(): void
// }
// // const people = new People() // Cannot create an instance of an abstract class.
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name
//   }
//   printName () {
//     console.log( `name is: ${this.name}`)
//   }
// }
// const man = new Man('Tom')
// // console.log(man)
// man.printName() // name is: Tom

// ts在2.0版本开始abstruct关键字不仅可以标记类和类里面的方法，还可以标记类中定义的属性和存取器。
// abstract class People{
//   public abstract _name: string
//   abstract get insideName (): string
//   abstract set insideName (val: string) // 存值器函数不需要标记返回值类型
// }

// class P extends People{
//   public _name: string
//   insideName: string
// }
// 抽象方法和抽象存取器都不能包含实际的代码块，只需要指定属性名、方法名、方法参数和返回值类型。存值器函数不需要标返回值类型。

// 实例属性
class People{
  constructor(public name: string) { }
}

let p2: People = new People('lemon')
class Animal{
  constructor(public name: string) {  }
}
p2 = new Animal('haha')



// 高级技巧——构造函数


// 把类当做接口使用(类类型接口)
interface FoodInterface {
  type: string
}

// 用FoodClass类实现FoodInterface接口  实现关键字：implements
// class FoodClass implements FoodInterface{
  // public static type: string // Error 实例上没有这个属性
  // public type: string
// }
// 注意：接口检测的是使用该接口定义的类创建的实例


// 接口继承类 继承类的成员及成员类型
// 接口会继承类的private和protected修饰的成员 当接口继承的类包含这两个修饰符修饰的成员时，此接口只能被这个类或者它的子类实现
class A{
  protected name: string
}
interface I extends A {}
class B extends A implements I {
  public name: string
}

// 泛型中使用类类型
const  create = <T>(c: new() => T):T => {
  return new c()
}
class Infos {
  public age: number
  constructor() {
    this.age = 18
  }
}
console.log(create(Infos))
console.log(create(Infos).age) // 18
