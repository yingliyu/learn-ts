// 1、this类型
class Counter{
  constructor(public count:number = 0) {}
  add(value:number){
    this.count += value
    return this
  }
  subtract(value:number){
    this.count -= value
    return this // 满足链式调用
  }
}
let counter1 = new Counter(10)
// console.log(counter1.add(2).subtract(6))

class PowClass extends Counter{
  constructor(public count: number = 0){
    super(count)
  }
  public pow(value: number){
    this.count = this.count ** value
    return this
  }
}
let powCount = new PowClass(2)
console.log(powCount.pow(3).add(1).subtract(3))

// 2、索引类型
// 索引类型查询 keyof
interface InfoAdvanced {
  name: string;
  age1: number;
}
let infoProp: keyof InfoAdvanced
infoProp = 'name'
infoProp = 'age1'
// infoProp = 'sex' // error
// 索引访问
